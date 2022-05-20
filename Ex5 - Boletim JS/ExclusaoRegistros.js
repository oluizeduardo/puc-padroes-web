var btnExcluir = document.querySelector("#btnExcluir");

btnExcluir.addEventListener("click", function(event){
    
    if (confirm("Deseja mesmo excluir todos os registros?") == true) {
        localStorage.clear();

        let tabela = document.getElementById('tabela-notas');

        while(tabelaNotas.length > 0){
            tabela.deleteRow( 1 );
        }
        ajustaDisponibilidadeBotoes();
        alert("Registros excluídos com sucesso!");
    }    
});