import * as model from './model.mjs';
import recipeView from './views/recipeView.mjs';
import searchView from './views/searchView.mjs';
import resultsView from './views/resultsView.mjs';
import paginationView from './views/paginationView.mjs';
import bookmarksView from './views/bookmarksViews.mjs';
import addRecipeView from './views/addRecipeView.mjs';

const controlRecipe = async function () {
    try {
        // window.location - entire url
        const id = window.location.hash.slice(1);
        // const id = '5ed6604591c37cdc054bc886';

        if (!id) return;

        //0. update results view to mark selected search result
        resultsView.update(model.getSearchResultsPage());
        bookmarksView.update(model.state.bookmarks)

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
        let query = searchView.getQuery()
        if (!query)
            query = model.state.search.query;
        if (!query)
            return;


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


const controlPagination = function (goToPage) {
    resultsView.render(model.getSearchResultsPage(goToPage))
    paginationView.render(model.state.search)
}

const controlServings = function (newServings) {
    model.updateServings(newServings);

    // recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
}


const controlAddBookmark = function () {

    //add / remove bookmarks
    if (!model.state.recipe.bookmarked) 
        model.addBookmark(model.state.recipe);
    else
        model.removeBookmark(model.state.recipe.id);
    
    //update view
    recipeView.update(model.state.recipe)

    //render bookmarks
    bookmarksView.render(model.state.bookmarks);

}

const controlBookmarks = function(){
    bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function(newRecipe){
    try{
        //loading spinner
        addRecipeView.renderSpinner();

        //upload the new recipe data
        await model.uploadRecipe(newRecipe);
        
        //render recipe
        recipeView.render(model.state.recipe)

        //success message
        addRecipeView.renderMessage();
        
        //render bookmark view 
        bookmarksView.render(model.state.bookmarks);

        // change id in url
        window.history.pushState(null,'',`#${model.state.recipe.id}`)

        setTimeout(function(){
            addRecipeView.toggleWindow();
        },1000)
        


    }
    catch(err){
        console.log('Error 🎉: ' + err);
        addRecipeView.renderError(err.message);
    }
}

const init = function () {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipe);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addRecipeView.addHandlerUpload(controlAddRecipe)

}
init();