$(function(){
    $("#inputSearch").keyup(function(){
        let term = this.value;
        if(term.length == 0){
            loadNews();
        }
        $("#containerListNews").empty();
        searchNews(term);
    })
});

function searchNews(term){
    let listOfNews = LocalStorage.getLocalStorage();

    for(let news of listOfNews){
        if(news.title.toLowerCase().indexOf(term) > -1){
            appendElementOnTheScreen(news);
        }
    }
}