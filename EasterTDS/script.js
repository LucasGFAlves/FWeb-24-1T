document.addEventListener('DOMContentLoaded', () => {
    const ovoAnimado = document.querySelector('.ovo-animado');
    const botaoAbrirOvo = document.getElementById('abrir-ovo');
    const solucaoDiv = document.getElementById('solucao');
    const mostrarSolucaoBotao = document.getElementById('mostrar-solucao');

    botaoAbrirOvo.addEventListener('click', () => {
        ovoAnimado.classList.add('aberto');
        botaoAbrirOvo.style.display = 'none'; // Esconde o botão após clicar
    });

    mostrarSolucaoBotao.addEventListener('click', () => {
        solucaoDiv.classList.toggle('oculta');
        mostrarSolucaoBotao.textContent = solucaoDiv.classList.contains('oculta') ? 'Mostrar Solução' : 'Esconder Solução';
    });
});