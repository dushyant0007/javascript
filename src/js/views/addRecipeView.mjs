class AddRecipeView {

    #parentElement = document.querySelector('.upload');
    #window  = document.querySelector('.add-recipe-window')
    #overlay  = document.querySelector('.overlay')
    #btnOpen = document.querySelector('.nav__btn--add-recipe')
    #btnClose = document.querySelector('.btn--close-modal')
    #successMassage = 'recipe uploaded successfully 🤙';
    constructor() {
        this.addHandlerShowWindow();
        this.addHandlerHideWindow();
    }

    toggleWindow(){
        this.#overlay.classList.toggle('hidden');
        this.#window.classList.toggle('hidden');
    }

    addHandlerShowWindow(){
        this.#btnOpen.addEventListener('click', () =>{
            this.toggleWindow();
        });
    }
    addHandlerHideWindow(){
        this.#btnClose.addEventListener('click', ()=>{
            this.toggleWindow();
        });
        this.#overlay.addEventListener('click', ()=>{
            this.toggleWindow();
        });
    }

    addHandlerUpload(handler){
        this.#parentElement.addEventListener('submit',function(e){
            e.preventDefault();
            const dataArr = [... new FormData(this)];
            const data = Object.fromEntries(dataArr)
            handler(data);
        });
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    }
    renderError(message) {
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

    renderMessage(message=this.#successMassage) {
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



}

export default new AddRecipeView;