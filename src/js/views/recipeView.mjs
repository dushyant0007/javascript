
class RecipeView {
    #parentElement = document.querySelector('.recipe');
    #successMessage = `Start by searching for a recipe or an ingredient. Have fun!`;
    #errorMessage = 'could\'t find this perticular recipe';
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup(data)
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    }

    addHandlerRender(handler) {
        window.addEventListener('hashchange', handler);
        window.addEventListener('load', handler);
        //or
        // ['hashchange', 'load'].forEach(ev => 
        //     window.addEventListener(ev, controlRecipe)
        // );
    }

    addHandlerUpdateServings(handler) {
        this.#parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo
            if (updateTo > 0)
                handler(updateTo);
        })
    }

    addHandlerAddBookmark(handler){
        this.#parentElement.addEventListener('click',function(e){
            const btn = e.target.closest('.btn--bookmark');

            if(!btn) return;
            
            handler();
        })
    }

    update(data) {
        if (!data || (Array.isArray(data) && data.length === 0))
            return this.renderError();

        this.#data = data;
        const newMarkup = this.#generateMarkup(data);

        //this method will then convert that string int real DOM Node object (virtual DOM)
        const newDOM = document.createRange().createContextualFragment(newMarkup)

        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this.#parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            //update - change - text
            if (!newEl.isEqualNode(curEl) &&
                newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            }

            //update - change - attributes
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(
                    attr => curEl.setAttribute(attr.name, attr.value)
                );
            }
        })
    }

    renderSpinner(parentEl = this.#parentElement) {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="src/img/icons.svg#icon-loader"></use>
        </svg>
      </div>
      `;
        parentEl.innerHTML = '';
        parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this.#errorMessage) {
        const markup = `
        <div class="error">
            <div>
                <svg>
                    <use href="src/img/icons.svg#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
        `
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    renderMessage(message = this.#successMessage) {
        const markup = `
       <div class="recipe">
            <div class="message">
            <div>
                <svg>
                <use href="src/img/icons.svg#icon-smile"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
       `
       this.#clear();
       this.#parentElement.insertAdjacentHTML('afterbegin', markup)
    }


    #generateMarkup(recipe) {
        return `
        <figure class="recipe__fig">
              <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${recipe.title}</span>
              </h1>
            </figure>
    
            <div class="recipe__details">
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="src/img/icons.svg#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="src/img/icons.svg#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                <span class="recipe__info-text">servings</span>
    
                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--update-servings" data-update-to="${this.#data.servings - 1}">
                    <svg>
                      <use href="src/img/icons.svg#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button class="btn--tiny btn--update-servings" data-update-to="${this.#data.servings + 1}">
                    <svg>
                      <use href="src/img/icons.svg#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
              </div>
    
              <div class="recipe__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
              <button class="btn--round btn--bookmark">
                <svg class="">
                  <use href="src/img/icons.svg#icon-bookmark${this.#data.bookmarked ? '-fill' : ''}"></use>
                </svg>
              </button>
            </div>
    
            <div class="recipe__ingredients">
              <h2 class="heading--2">Recipe ingredients</h2>
              <ul class="recipe__ingredient-list">
    
                ${recipe.ingredients.map(ing => `
                  <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="src/img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ing.quantity}</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${ing.unit}</span>
                      ${ing.description}
                    </div>
                  </li>
                `).join('')}
              </ul>
            </div>
    
            <div class="recipe__directions">
              <h2 class="heading--2">How to cook it</h2>
              <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
                directions at their website.
              </p>
              <a
                class="btn--small recipe__btn"
                href="${recipe.sourceUrl}"
                target="_blank"
              >
                <span>Directions</span>
                <svg class="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
        `
    }



}

export default new RecipeView();