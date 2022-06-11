function listTags(){
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
        console.log(finalArray);
    }

    let elementTag;
    for(let item of finalArray){
        elementTag = "<li><a href='#'>"+ item +"</li>";
        $("#tags").append(elementTag);
    }
}

listTags();