const senhaCorreta1 = "bug"; 
const senhaCorreta2 = "html"; 
const senhaCorreta3 = "exception"; 
const senhaCorreta4 = "array";
const senhaCorreta5 = "admin";
const codigoSecretoDiv1 = document.getElementById("codigo-secreto1");
const codigoSecretoDiv2 = document.getElementById("codigo-secreto2");
const codigoSecretoDiv3 = document.getElementById("codigo-secreto3");
const codigoSecretoDiv4 = document.getElementById("codigo-secreto4");
const codigoSecretoDiv5 = document.getElementById("codigo-secreto5");
const mensagemElement = document.getElementById("mensagem");

function verificarSenha() {
    const senhaDigitada = document.getElementById("senha").value;

    if (senhaDigitada === senhaCorreta1) {
        codigoSecretoDiv1.style.display = "block"; // Exibe a seção secreta
        mensagemElement.textContent = "Senha correta! Código secreto desbloqueado.";
        mensagemElement.style.color = "green";
        document.getElementById("senha").value = ""; // Limpa o campo de senha
    }
    else if (senhaDigitada === senhaCorreta2) {
        codigoSecretoDiv2.style.display = "block"; // Exibe a seção secreta
        mensagemElement.textContent = "Senha correta! Código secreto desbloqueado.";
        mensagemElement.style.color = "green";
        document.getElementById("senha").value = ""; // Limpa o campo de senha
    }
    else if (senhaDigitada === senhaCorreta3) {
        codigoSecretoDiv3.style.display = "block"; // Exibe a seção secreta
        mensagemElement.textContent = "Senha correta! Código secreto desbloqueado.";
        mensagemElement.style.color = "green";
        document.getElementById("senha").value = ""; // Limpa o campo de senha
    }
    else if (senhaDigitada === senhaCorreta4) {
        codigoSecretoDiv4.style.display = "block"; // Exibe a seção secreta
        mensagemElement.textContent = "Senha correta! Código secreto desbloqueado.";
        mensagemElement.style.color = "green";
        document.getElementById("senha").value = ""; // Limpa o campo de senha
    }
    else if (senhaDigitada === senhaCorreta5) {
        codigoSecretoDiv5.style.display = "block"; // Exibe a seção secreta
        mensagemElement.textContent = "Senha correta! Código secreto desbloqueado.";
        mensagemElement.style.color = "green";
        document.getElementById("senha").value = ""; // Limpa o campo de senha
    } else {
        mensagemElement.textContent = "Senha incorreta. Tente novamente.";
        mensagemElement.style.color = "red";
    }
}