// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera as frases
const changePhrasesBtn = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique para alterar as 3 frases com textos diferentes
changePhrasesBtn.addEventListener("click", function () {
  const frases = document.getElementsByClassName("mensagem2");
  
  frases[0].textContent = "Sempre louco atrás do gol";
  frases[1].textContent = "Eu voou";
  frases[2].textContent = "Matar o puto tricolor!";
});
