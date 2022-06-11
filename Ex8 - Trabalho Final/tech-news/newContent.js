function salvarNoticia(){

    let news = getFormContent();

    if(news.title != "" && news.content != ""){
        
        let listOfNews = getLocalStorageInJSON();

        if(listOfNews === null || listOfNews.length == 0){
            listOfNews = new Array();
        }

        listOfNews.push(createNews(news.title, news.urlImgCover, news.content, news.tags));

        updateLocalStorage(listOfNews);

        alert("Nova notícia salva com sucesso!");
    }
}

function getFormContent(){
    const formContent = {
        "title" : document.getElementById("newsTitle").value,
        "urlImgCover" : document.getElementById("newsImgCover").value,
        "content" : document.getElementById("newsContent").value,
        "tags" : document.getElementById("newsTags").value
    }
    return formContent;
}

function getLocalStorageInJSON(){
    return JSON.parse(localStorage.getItem("noticias"));
}

function createNews(title, urlImgCover, content, tags){
    const news = {
        "date": new Date().toLocaleString(),
        "cod": new Date().getTime(),
        "title" : title,
        "urlImgCover" : urlImgCover,
        "content" : content,
        "tags" : tags
    }
    return news;
}

function updateLocalStorage(listOfNews){
    localStorage.setItem("noticias", JSON.stringify(listOfNews));
}