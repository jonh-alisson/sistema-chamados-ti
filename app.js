// Captura o formulário de abertura de chamados
const formulario = document.querySelector("form");

// Aguarda o envio do formulário
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("JavaScript conectado com sucesso!");
});
