var btnSalvar = document.querySelector("#btnSalvar");
var tabelaNotas = document.getElementsByClassName("linha-tabela");

function verificaTabelaPreenchida(){
    if(tabelaNotas.length > 0) 
        btnSalvar.removeAttribute("disabled");
}

btnSalvar.addEventListener("click", function(){

    boletim = [];

    if(tabelaNotas.length > 0){
        for (i = 0; i < tabelaNotas.length; i++) {
            var nome      = tabelaNotas[i].querySelector(".info-nome").textContent;
            var total     = tabelaNotas[i].querySelector(".info-total").textContent;
            var media     = tabelaNotas[i].querySelector(".info-media").textContent;
            var resultado = tabelaNotas[i].querySelector(".info-resultado").textContent;
    
            const aluno = montaNovoAluno(nome, total, media, resultado);
    
            boletim.push(aluno);
            localStorage.setItem("boletim", JSON.stringify(boletim));
        }
        formataLinhasSalvas();
        alert("Dados salvos com sucesso!");
    }
});

function montaNovoAluno(nome, total, media, resultado){
    const novoAluno = {
        "nome": nome,
        "total": total,
        "media": media,
        "resultado": resultado
    }
    return novoAluno;
}