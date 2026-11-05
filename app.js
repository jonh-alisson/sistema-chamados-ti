
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const chamado = {
        protocolo: "CH-" + Date.now(),
        nome: formulario.querySelector('input[type="text"]').value,
        email: formulario.querySelector('input[type="email"]').value,
        categoria: document.querySelector("#categoria").value,
        prioridade: document.querySelector("#prioridade").value,
        status: "Aberto",
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

const telaInicial = document.getElementById("tela-inicial");
const formularioChamado = document.getElementById("ticket-form");
const formularioConsulta = document.getElementById("consulta-form");

document.getElementById("btnAbrirChamado").addEventListener("click", function() {
    telaInicial.hidden = true;
    formularioChamado.hidden = false;
});

document.getElementById("btnConsultarChamados").addEventListener("click", function() {
    telaInicial.hidden = true;
    formularioConsulta.hidden = false;
});

document.getElementById("btnVoltarInicio").addEventListener("click", function() {
    formularioConsulta.hidden = true;
    telaInicial.hidden = false;
});

document.getElementById("btnVoltarFormulario").addEventListener("click", function() {
    formularioChamado.hidden = true;
    telaInicial.hidden = false;
});
document.getElementById("btnGestaoChamados").addEventListener("click", function() {
    window.location.href = "chamados.html";
});

formularioConsulta.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInformado = document.getElementById("consulta-email").value.trim().toLowerCase();

    const chamadosSalvos = JSON.parse(
        localStorage.getItem("chamadosTI") || "[]"
    );

    const meusChamados = chamadosSalvos.filter(chamado =>
        chamado.email.trim().toLowerCase() === emailInformado
    );

    const resultado = document.getElementById("resultado-consulta");

    resultado.innerHTML = "";

    if (meusChamados.length === 0) {
        resultado.textContent = "Nenhum chamado encontrado para este e-mail.";
        return;
    }

    resultado.innerHTML = "<h3>Meus chamados</h3>";

    meusChamados.forEach(chamado => {
        const item = document.createElement("p");

        item.textContent =
            "Protocolo: " + chamado.protocolo +
            " | Categoria: " + chamado.categoria +
            " | Status: " + chamado.status;

        resultado.appendChild(item);
    });
});
