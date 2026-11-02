
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const chamado = {
        protocolo: "CH-" + Date.now(),
        nome: formulario.querySelector('input[type="text"]').value,
        email: formulario.querySelector('input[type="email"]').value,
        categoria: document.querySelector("#categoria").value,
        prioridade: document.querySelector("#prioridade").value,
        descricao: document.querySelector("#descricao").value,
        data: new Date().toLocaleString("pt-BR")
    };

    const chamados = JSON.parse(
        localStorage.getItem("chamadosTI") || "[]"
    );

    chamados.push(chamado);

    localStorage.setItem(
        "chamadosTI",
        JSON.stringify(chamados)
    );

    alert(
        "Chamado registrado com sucesso!\n" +
        "Protocolo: " + chamado.protocolo
    );

    formulario.reset();
});
