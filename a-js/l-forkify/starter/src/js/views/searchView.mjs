class SearchView{
    #parentEl = document.querySelector('.search');
    getQuery(){
        const query = this.#parentEl.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    }

    #clearInput(){
        this.#parentEl.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler){
        this.#parentEl.addEventListener('submit',
        (e)=>{
            e.preventDefault();//so page don't get reload
            handler();
        }
        );
    }
}

export default new SearchView();