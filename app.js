//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criando lista de amigos:
let listaDeAmigos = [];

// Criando uma função para agregar amigos

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == ''){
        alert('Por favor, insira um nome.');
    }
    else{
        listaDeAmigos.push(amigo);
        limparCampo();
        console.log(listaDeAmigos);
    }
}

// Funçao para limpar o campo

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}

