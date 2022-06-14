function loadNews(){
    let listOfNews = LocalStorage.getLocalStorage();
    appendListOfNewsOnTheScreen(listOfNews);
}

function appendListOfNewsOnTheScreen(listOfNews){    
    for(let news of listOfNews){
        appendElementOnTheScreen(news);
    }
}

function appendElementOnTheScreen(news){
    let newElement = "<div class='card' style='width: 20rem;'>"
        newElement += "<img src='"+ news.urlImgCover +"' class='mt-2' height=160px>"
        newElement += "<div class='card-body'>"
            newElement += "<small>"+ news.date +"</small>"
            newElement += "<h5 class='card-title'>"+ news.title +"</h5>"
            newElement += "<p class='card-text'>"+ news.content.slice(0, 150) +"</p>"
            newElement += "<a href='view.html?cod="+ news.cod +"' class='btn btn-primary'>Ver mais &RightArrow;</a>";
        newElement += "</div>";

    $("#containerListNews").append(newElement);
}