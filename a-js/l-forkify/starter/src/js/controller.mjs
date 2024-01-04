import * as model from './model.mjs';
import recipeView from './views/recipeView.mjs';
import searchView from './views/searchView.mjs';
import resultsView from './views/resultsView.mjs';
import paginationView from './views/paginationView.mjs';


const controlRecipe = async function () {

    try {
        // window.location - entire url
        const id = window.location.hash.slice(1);
        // const id = '5ed6604591c37cdc054bc886';

        if (!id) return;

        //1. loading recipe
        recipeView.renderSpinner();
        await model.loadRecipe(id);

        //2. rendering recipe
        recipeView.render(model.state.recipe);


    }
    catch (err) {
        console.log('this-is-error ', err)
        recipeView.renderError('could\'t find this recipe' + err);
    }

}

const controlSearchResults = async function () {
    try {

        resultsView.renderSpinner();

        //1. ger search query
        const query = searchView.getQuery()
        if(!query) return;

        //2. load search results
        await model.loadSearchResults(query)

        //3. render results
        // resultsView.render(model.state.search.results)
        resultsView.render(model.getSearchResultsPage())

        //4. render initial pagination button
        paginationView.render(model.state.search)

    }
    catch (err) {
        console.log(err)
    }
                        }
 

const controlPagination = function(goToPage){
    resultsView.render(model.getSearchResultsPage(goToPage))
    paginationView.render(model.state.search)
}


const init = function () {
    recipeView.addHandlerRender(controlRecipe)
    searchView.addHandlerSearch(controlSearchResults)
    paginationView.addHandlerClick(controlPagination)
}
init();