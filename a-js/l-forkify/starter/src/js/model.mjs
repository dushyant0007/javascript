import { API_URL, RES_PER_PAGE,KEY } from './config.mjs';
import { getJSON,sendJSON } from './helper.mjs';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: []
};

const createRecipeObject = function(server_data){
    const { recipe } = server_data.data;

        return {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
            ...(recipe.key && {key:recipe.key}),

        }
    
}

export const loadRecipe = async function (id) {

    try {

        const server_data = await getJSON(`${API_URL}${id}?key=${KEY}`)

        state.recipe = createRecipeObject(server_data)

        if (state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true;
        else
            state.recipe.bookmarked = false;
    }
    catch (err) {
        // console.log('got-the-error', err)
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
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


export const getSearchResultsPage = function (page = 1) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = start + state.search.resultsPerPage;
    return state.search.results.slice(start, end)
}

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity / state.recipe.servings) * newServings
    });
    state.recipe.servings = newServings;
}


const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function (recipe) {
    //add to bookmark
    state.bookmarks.push(recipe);

    //mark current recipe as book mark
    if (recipe.id === state.recipe.id)
        state.recipe.bookmarked = true;

    persistBookmarks();
}

export const removeBookmark = function (id) {
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);

    if (id === state.recipe.id)
        state.recipe.bookmarked = false;

    persistBookmarks();
}

export const uploadRecipe = async function (newRecipe) {
    
    try{
        const ingredients = Object.entries(newRecipe)
        .filter(entry => {
            //removing empty fields
            return entry[0].startsWith('ingredient') && entry[1] !== '';

        })
        .map(ing => {
            const ingArr = ing[1].replaceAll(' ', '').split(',');
            if (ingArr.length !== 3)
                throw new Error('Wrong ingredient format! Enter recipe in correct format :)');

            const [quantity, unit, description] = ingArr;
            return { quantity: quantity ? +quantity : null, unit, description };
        });

        const recipe = {
            title: newRecipe.title,
            source_url:newRecipe.sourceUrl,
            image_url: newRecipe.image? newRecipe.image : 'no image',
            publisher:newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients,
        }
        console.log(recipe)
        const sendUrl = `${API_URL}?key=${KEY}`;
        const server_response = await sendJSON(sendUrl,recipe);
        console.log(server_response)
        state.recipe = createRecipeObject(server_response);
        addBookmark(state.recipe);
    }
    catch(err){
        throw err; 
    }

}


const init = function () {
    const bookmarks = localStorage.getItem('bookmarks');
    if (bookmarks)
        state.bookmarks = JSON.parse(bookmarks);
}
init();