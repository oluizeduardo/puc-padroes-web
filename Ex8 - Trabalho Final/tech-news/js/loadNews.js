function loadNews(){
    let listOfNews = LocalStorage.getLocalStorage();

    for(let news of listOfNews){
        let newElement = "<div class='card' style='width: 22rem;'>"
        newElement += "<img src='"+ news.urlImgCover +"' class='mt-2'>"
        newElement += "<div class='card-body'>"
            newElement += "<small>"+ news.date +"</small>"
            newElement += "<h5 class='card-title'>"+ news.title +"</h5>"
            newElement += "<p class='card-text'>"+ news.content.slice(0, 150) +"</p>"
            newElement += "<a href='#' class='btn btn-primary'>Ver mais &RightArrow;</a>";
        newElement += "</div>";

        $("#containerListNews").append(newElement);
    }
}

loadNews();