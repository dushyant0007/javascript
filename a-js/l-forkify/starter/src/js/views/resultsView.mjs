class ResultsView {

    #parentElement = document.querySelector('.results');
    #successMessage = `Start by searching for a recipe or an ingredient. Have fun!`;
    #errorMessage = 'could\'t find this perticular recipe';
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup(data);
        this.#clear();
        if(!markup){
            this.renderError();
            return;
        }
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    }

    update(data){
        this.#data = data;
        const newMarkup = this.#generateMarkup(data);
  
        //this method will then convert that string int real DOM Node object (virtual DOM)
        const newDOM = document.createRange().createContextualFragment(newMarkup)
  
        const newElements =  Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this.#parentElement.querySelectorAll('*'));
  
        newElements.forEach((newEl,i)=>{
          const curEl = curElements[i];
  
          //update - change - text
          if(!newEl.isEqualNode(curEl) &&
           newEl.firstChild?.nodeValue.trim() !== ''){
            curEl.textContent = newEl.textContent;
          }
  
          //update - change - attributes
          if(!newEl.isEqualNode(curEl)){
            Array.from(newEl.attributes).forEach(
              attr => curEl.setAttribute(attr.name,attr.value)
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
    }


    #generateMarkup(data) {
        return data.map((rec)=>this.#generateMarkupPreview(rec)).join('');

    }

    #generateMarkupPreview(rec){
        // window.location = page-url
        const id = window.location.hash.slice(1)
        return`
            <li class="preview">
                <a class="preview__link ${rec.id == id ? 'preview__link--active': ''}" href="#${rec.id}">
                <figure class="preview__fig">
                    <img src="${rec.image_url}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${rec.title.slice(0, 20)} ...</h4>
                    <p class="preview__publisher">${rec.publisher}</p>
                    <div class="preview__user-generated"> 
                    <svg>
                        <use href="src/img/icons.svg#icon-user"></use>
                    </svg>
                    </div>
                </div>
                </a>
            </li>`
    }
}

export default new ResultsView();