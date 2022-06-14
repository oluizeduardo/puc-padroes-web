function loadContentView(cod){                
    let listOfNews = LocalStorage.getLocalStorage();

    for(let news of listOfNews){
        if(news.cod == cod){
            $("#articleTitle").html(news.title);

            let newElement =  "<div class='row' style='width: 75%;'>";
                newElement += "<img src='"+ news.urlImgCover +"' class='card-img-top'>";                        
                newElement += "<div class='card-body' id='view-card-body'>";
                newElement += "<div class='small text-muted' id='view-news-date'>"+ news.date +"</div>";    
                newElement += "<h2 class='card-title h4' id='view-news-title'>"+ news.title +"</h2>";
                newElement += "<p class='card-text' id='view-news-content'>"+ news.content +"</p>";
                newElement += "</div>";
                newElement += "</div>";            
            $("#result").html(newElement);
        }
    }
}