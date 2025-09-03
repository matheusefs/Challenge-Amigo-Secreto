# 🎁 Projeto Amigo Secreto

Este projeto foi desenvolvido como parte do curso **Oracle Next Education (ONE)**.  
O objetivo é criar um sistema de **Amigo Secreto** simples e funcional, utilizando **HTML, e JavaScript**.

---

## 🚀 Funcionalidades

- Adicionar participantes dinamicamente.
- Exibir a lista de amigos em tempo real.
- Sortear aleatoriamente um amigo da lista.
- Evitar que o mesmo amigo seja sorteado mais de uma vez.
- Interface simples e interativa.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → estrutura da página.
- **JavaScript** → manipulação do DOM e lógica do sorteio.

---

## 📂 Estrutura de Arquivos

```
/amigo-secreto
│
├── index.html     # Estrutura da página
├── style.css      # Estilização
├── script.js      # Lógica do Amigo Secreto
└── README.md      # Documentação do projeto
```

---

## 🔍 Como funciona

1. O usuário digita o nome do participante e clica em **Adicionar**.
2. O nome é salvo em um **array** e exibido na tela.
3. Ao clicar em **Sortear Amigo**, um participante é selecionado aleatoriamente.
4. O participante sorteado é removido do array para não ser repetido.
5. O resultado é exibido na interface.

---

## ✅ Exemplo de Código

### Captura do nome:
```javascript
let nome = document.getElementById("nomeInput").value;
listaDeAmigos.push(nome);
```

### Sorteio sem repetição:
```javascript
let indice = Math.floor(Math.random() * listaDeAmigos.length);
let sorteado = listaDeAmigos[indice];
listaDeAmigos.splice(indice, 1); // remove o sorteado
```

---

## 🙌 Autor

Desenvolvido por **Matheus Emanuel Freitas Santana**  
🔗 [GitHub](https://github.com/matheusefs)  
📧 Email: devmatheusefs@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/matheusefsantana/)

