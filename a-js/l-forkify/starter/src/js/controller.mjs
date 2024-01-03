import * as model from './model.mjs'
import recipeView from './views/recipeView.mjs';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////




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
        recipeView.renderError('could\'t find this recipe'+err);
    }

}

const init = function () {
    recipeView.addHandlerRender(controlRecipe)
}
init();