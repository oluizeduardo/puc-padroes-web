
var btnAdicionar = document.querySelector("#btnAdicionar");

btnAdicionar.addEventListener("click", function(event){

    var nome = window.prompt("informe seu nome");

    var spanNome = document.querySelector("#nome");

    spanNome.textContent = `Seja bem vindo ${nome}!`;

});
