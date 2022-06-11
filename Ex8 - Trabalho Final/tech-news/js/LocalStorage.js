class LocalStorage{

    static LS_DATA_SOURCE = "noticias";

    static getLocalStorage(){
        let listOfNews = LocalStorage.getLocalStorageInJSON();

        if(listOfNews === null || listOfNews.length == 0){
            listOfNews = new Array();
        }
        return listOfNews
    }

    static getLocalStorageInJSON(){
        return JSON.parse(localStorage.getItem(this.LS_DATA_SOURCE));
    }

    static updateLocalStorage(listOfNews){
        localStorage.setItem(this.LS_DATA_SOURCE, JSON.stringify(listOfNews));
    }
}