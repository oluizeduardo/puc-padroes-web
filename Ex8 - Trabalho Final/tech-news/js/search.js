$(function(){
    $("#inputSearch").keyup(function(){
        let term = this.value;
        if(term.length == 0){
            clearScreen();
            loadNews();
        }else{
            filterNewsByTerm(term);
        }        
    })
});

function filterNewsByTerm(term){
    let listOfNews = LocalStorage.getLocalStorage();
    let found = false;

    clearScreen();

    listOfNews.forEach((news) => {
        if(news.title.toLowerCase().indexOf(term) > -1){
            found = true;
            appendElementOnTheScreen(news);
        }
    });
    if(!found){
        showNothingFoundMessage();
    }
}

function filterNewsByTag(tag){
    let listOfNews = LocalStorage.getLocalStorage();
    let found = false;

    clearScreen();

    listOfNews.forEach((news) => {        
        if(news.tags.indexOf(tag) > -1){
            found = true;            
            appendElementOnTheScreen(news);
        }
    });
    if(!found){
        showNothingFoundMessage();
    }
}

function showNothingFoundMessage(){
    $("#containerListNews").html('Nenhuma notícia encontrada com esse termo!');
}

function clearScreen(){
    $("#containerListNews").empty();
}