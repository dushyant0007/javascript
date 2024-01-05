import { RES_PER_PAGE } from "../config.mjs";

class PaginationView {
    #parentElement = document.querySelector('.pagination');
    #successMessage = `Start by searching for a recipe or an ingredient. Have fun!`;
    #errorMessage = 'could\'t find this perticular recipe';
    #data;

    render(data) {
        this.#data = data; // entire search object;
        const markup = this.#generateMarkup()
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    }

    addHandlerClick(handler) {
        this.#parentElement.addEventListener('click',function(e){
           const btn = e.target.closest('.btn--inline');
           if(!btn) return;

           const goToPage = +btn.dataset.goto;
           handler(goToPage);
        });
    }



    #generateMarkup() {
        const numPages = Math.ceil(this.#data.results.length / RES_PER_PAGE);
        

        //page 1, and there are other pages
        if (this.#data.page === 1 && numPages > 1) {
            return `
            <button data-goto="${this.#data.page+1}"class="btn--inline pagination__btn--next">
                <span>Page ${this.#data.page+1}</span>
                <svg class="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-right"></use>
                </svg>
            </button> 
            `
        }



        //last page
        if (this.#data.page === numPages && numPages > 1) {
            return `
            <button data-goto="${this.#data.page - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-left"></use>
                </svg>
                <span>Page ${this.#data.page - 1}</span>
            </button>
            `
        }

        //other pages
        if(this.#data.page < numPages){
             
            return `
            <button data-goto="${this.#data.page - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-left"></use>
                </svg>
                <span>Page ${this.#data.page - 1}</span>
            </button>
            <button data-goto="${this.#data.page + 1}"class="btn--inline pagination__btn--next">
                <span>Page ${this.#data.page + 1}</span>
                <svg class="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-right"></use>
                </svg>
            </button> 
            `
        }

        



        //page1, and there are no other pages
        return 'single page';
        

        
        
        


    }


}

export default new PaginationView();


