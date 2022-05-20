var btnAdicionar = document.querySelector("#btnAdicionar");
var boletim = JSON.parse(localStorage.getItem("boletim")) || [];
var tabelaNotas = document.getElementsByClassName("linha-tabela");

boletim.forEach((aluno) => {
    adicionaLinhaNaTabelaNotas(aluno);
    formataLinhasSalvas();
});

ajustaDisponibilidadeBotoes();

btnAdicionar.addEventListener("click", function(event){

    var campoNome = document.querySelector("#info-nome");
    var campoHTML = document.querySelector("#nota-html");
    var campoCSS  = document.querySelector("#nota-css");
    var campoJS   = document.querySelector("#nota-js");

    var nome     = campoNome.value;
    var notaHTML = parseFloat(campoHTML.value);
    var notaCSS  = parseFloat(campoCSS .value);
    var notaJS   = parseFloat(campoJS  .value);

    var mensagemErro = document.querySelector("#mensagem-erro");
    var mensagemNotaNegativa = document.querySelector("#mensagem-nota-negativa");

    if(nome && notaHTML && notaCSS && notaJS){
        
        mensagemErro.classList.add("invisivel");

        if(notaHTML >= 0 && notaCSS >= 0 && notaJS >= 0){ 
            mensagemNotaNegativa.classList.add("invisivel");

            var total = calculaTotal(notaHTML, notaCSS, notaJS);
            var media = calculaMedia(total).toFixed(2);
            var resultado = montaStringResultado(media);

            const novoAluno = montaNovoAluno(nome, total, media, resultado);
            adicionaLinhaNaTabelaNotas(novoAluno);

            limpaCampos(campoNome, campoHTML, campoCSS, campoJS);
        }else{            
            mensagemNotaNegativa.classList.remove("invisivel");
        }
    }else{
        mensagemNotaNegativa.classList.add("invisivel");
        mensagemErro.classList.remove("invisivel");
    }
    ajustaDisponibilidadeBotoes();
});

function criaTR(nome, total, media){
    var novaTR = document.createElement("tr");
    novaTR.appendChild(criaTD(nome, "info-nome"));
    novaTR.appendChild(criaTD(total, "info-total"));
    novaTR.appendChild(criaTD(media, "info-media"));
    novaTR.appendChild(criaTDResultado(media));

    novaTR.classList.add("linha-tabela");

    return novaTR;
}

function criaTD(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function criaTDResultado(media){    
    var resultadoStr = montaStringResultado(media);    
    var classe = (resultadoStr === "Aprovado") ? "aprovado" : "reprovado";
    var tdResultado = criaTD(resultadoStr, "info-resultado");
    tdResultado.classList.add(classe);
    
    return tdResultado;
}

function calculaTotal(notaHTML, notaCSS, notaJS){
    return (notaHTML + notaCSS + notaJS);
}

function calculaMedia(somaDasNotas){
    return (somaDasNotas / 3);
}

function montaStringResultado(media){
    return (media >= 70) ? "Aprovado" : "Reprovado";
}

function adicionaLinhaNaTabelaNotas(aluno){
    var tabelaNotas = document.querySelector("#tabela-notas");
    tabelaNotas.appendChild(criaTR(aluno.nome, aluno.total, aluno.media));
}

function montaNovoAluno(nome, total, media, resultado){
    const novoAluno = {
        "nome": nome,
        "total": total,
        "media": media,
        "resultado": resultado
    }
    return novoAluno;
}

function limpaCampos(nome, notaHTML, notaCSS, notaJS){
    nome    .value = "";
    notaHTML.value = "";
    notaCSS .value = "";
    notaJS  .value = "";
}

function ajustaDisponibilidadeBotoes(){
    if(tabelaNotas.length > 0){
        btnSalvar.disabled = false;  
        btnExcluir.disabled = false;    
    }else{
        btnSalvar.disabled = true;
        btnExcluir.disabled = true;  
    }    
}

function formataLinhasSalvas(){
    for(i=0; i < tabelaNotas.length; i++){
        tabelaNotas[i].classList.add("linha-salva");
    }
}