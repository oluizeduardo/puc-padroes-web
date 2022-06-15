function loadTags(){
    let listOfNews = LocalStorage.getLocalStorage();

    if(listOfNews.length > 0){

        let tagsStr = extractSetOfTagsSeparatedByComma(listOfNews);        
        let listOfTags = loadListOfTags(tagsStr);
        appendTagsOnTheScreen(listOfTags);

    }else{
        showAnyTagsFound();
    }
}

function extractSetOfTagsSeparatedByComma(listOfNews){
    let tagsStr = "";
    for(let news of listOfNews){
        if(news.tags != null || news.tags !== undefined){
            tagsStr = tagsStr + "," + news.tags;
        }
    }
    return tagsStr;
}

function loadListOfTags(tagsStr){
    let listOfTags = new Array();
    if(tagsStr.length > 0){
        
        let arryTags = tagsStr.split(",");

        for(let item of arryTags){
            listOfTags.push(item);
        }
    }
    return listOfTags;
}

function appendTagsOnTheScreen(listOfTags){
    let element;
    for(let tag of listOfTags){
        element = "<li><a onclick='filterNewsByTag(\""+tag.trim()+"\")' href='#'>"+ tag +"</a></li>";
        $("#tags").append(element);
    }
}

function showAnyTagsFound(){
    $("#tags").html('Nenhuma tag encontrada!');
}

loadTags();