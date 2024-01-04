import { API_URL, RES_PER_PAGE } from './config.mjs';
import { getJSON } from './helper.mjs';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page:1,
        resultsPerPage:RES_PER_PAGE,
    }
};

export const loadRecipe = async function (id) {

    try {

        const data = await getJSON(`${API_URL}${id}`)

        let { recipe } = data.data;

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }

        console.log(state.recipe)
    }
    catch (err) {
        // console.log('got-the-error', err)
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}&key=b5ed6149-d8a5-4b8a-a9f0-3643fe17c676`);
        state.search.results = data.data.recipes.map((recipe) => {
            return {
               ...recipe,
            }
        })

    }
    catch (err) {
        throw err;
    }
}


export const getSearchResultsPage = function(page=1){
    state.search.page = page;
    const start = (page - 1)*state.search.resultsPerPage;
    const end = start + state.search.resultsPerPage;
    return state.search.results.slice(start,end)

}

// loadSearchResults('pizza').then(cl => console.log())
// console.log(state)