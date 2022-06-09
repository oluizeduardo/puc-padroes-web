function salvarNoticia(){
    var elTitulo = document.getElementByName("titulo")[0];
    var elConteudo = document.getElementByName("conteudo")[0];
    var elTags = document.getElementByName("newsTags")[0];

    if(elTitulo.value != "" && elConteudo.value != ""){
        
        let objNoticias = JSON.parse(localStorage.getItem("noticias"));

        if(objNoticias === null || objNoticias.length == 0){
            objNoticias = new Array();
        }

        let dataAtual = new Date();
        let noticia = new Object();
        noticia.data = dataAtual.toLocaleString();
        noticia.cod = dataAtual.getTime();
        noticia.titulo = elTitulo.value;
        noticia.conteudo =elConteudo.value;
        noticia.tag = elTags.value;

        objNoticias.push(noticia);

        localStorage.setItem("noticias", JSON.stringify(objNoticias));

        elTitulo.value = null, elConteudo =null, elTags = null;

        document.querySelector("#resultado").innerHTML = "Registro de notícia salvo com sucesso!";
    }
}