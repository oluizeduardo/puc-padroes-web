
var btnAdicionar = document.querySelector("#btnContador");

var contador = 0;

btnAdicionar.addEventListener("click", function(event){

    contador++;

    let spanContador = document.querySelector("#contador");

    spanContador.textContent = contador;

});

var btnZerar = document.querySelector("#btnZerar");

btnZerar.addEventListener("click", function(event){

    contador=0;

    let spanContador = document.querySelector("#contador");

    spanContador.textContent = contador;

});
