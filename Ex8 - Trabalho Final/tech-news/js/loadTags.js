function loadTags(){
    let listOfNews = LocalStorage.getLocalStorage();
    let tagsStr = "";

    for(let news of listOfNews){
        if(news.tags != null || news.tags !== undefined){
            tagsStr = tagsStr + "," + news.tags;
        }
    }
    
    let finalArray = new Array();
    if(tagsStr.length > 0){
        
        let arryTags = tagsStr.split(",");

        for(let item of arryTags){
            finalArray.push(item);
        }
    }

    let elementTag;
    for(let item of finalArray){
        elementTag = "<li><a onclick='filterNewsByTag(\""+item.trim()+"\")' href='#'>"+ item +"</a></li>";
        $("#tags").append(elementTag);
    }
}

loadTags();