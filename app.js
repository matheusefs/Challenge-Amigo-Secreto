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
        exibirListaDeAmigos();
    }
}

// Funçao para limpar o campo

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}

// Função para exibir a lista de amigos na página

function exibirListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de exibir novamente
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = document.createElement('li');
        amigo.textContent = listaDeAmigos[i];
        lista.appendChild(amigo);
    }
}

// Função para sortear amigos

function sortearAmigo(){
    if(listaDeAmigos.length == 0){
        document.getElementById('resultado').innerHTML = 'Nenhum amigo para sortear, ou todos já foram sorteados.';
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    listaDeAmigos.splice(indiceAleatorio, 1); // Remove o amigo sorteado da lista, garante que não será sorteado novamente.
    document.getElementById('resultado').innerHTML = 'Amigo sorteado: ' + nomeSorteado;
}
