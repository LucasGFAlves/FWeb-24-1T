//alert("Bem vindos a interatividade turma 24-1T");

var titulo = document.querySelector("#titulo");

function mostraAlerta(){
    alert("Funciona!");
}

function mostraTexto(texto){
    alert(texto);
}

mostraTexto('Feliz Páscoa');

function validaBusca(){
    if(document.querySelector("#inputlupa").value==""){
        alert("Nao pode estar vazio!");
        return false;
    }
}

document.querySelector("#form-busca").onsubmit = validaBusca;

titulo.addEventListener("submit", ()=>{titulo.textContent = "Novo Texto";
titulo.style.color="red";})

