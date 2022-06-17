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
    listOfNews.forEach((news) => {
        if(news.tags != null || news.tags !== undefined){
            tagsStr = tagsStr + "," + news.tags;
        }
    });
    return tagsStr;
}

function loadListOfTags(tagsStr){
    let listOfTags = new Array();
    if(tagsStr.length > 0){
        
        let arryTags = tagsStr.split(",");

        arryTags.forEach((tag) => {
            if(!isThereTagOnTheList(listOfTags, tag)){
                listOfTags.push(tag);
            }
        });
    }
    return listOfTags;
}

function isThereTagOnTheList(listOfTags, tag){
    return listOfTags.indexOf(tag) > -1 ? true : false;
}

function appendTagsOnTheScreen(listOfTags){
    let element;
    listOfTags.forEach((tag)=>{
        element = "<li><a onclick='filterNewsByTag(\""+tag.trim()+"\")' href='#'>"+ tag +"</a></li>";
        $("#tags").append(element);
    });
}

function showAnyTagsFound(){
    $("#tags").html('Nenhuma tag encontrada!');
}

loadTags();