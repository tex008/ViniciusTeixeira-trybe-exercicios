function changeText() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerText = 'QUERO GANHAR 4500 E TRABALHAR EM UMA EMPRESA LEGAAAAL!';
  console.log(paragraph);
  paragraph.style.fontFamily = 'monospace';
}
changeText();

function changeSquareColor() {
  let greenSquare = document.getElementsByClassName("main-content")[0];
  greenSquare.style.background = "rgb(76,164,109)";
  console.log(greenSquare)
}
changeSquareColor();

function changeSquareToWhite() {
  let square = document.getElementsByClassName("center-content")[0];
  square.style.background = "white";
  console.log(square)
}
changeSquareToWhite();

function fixText() {
  let title = document.getElementsByTagName("h1")[0];
  title.innerText = 'Exercício 5.1 - JavaScript';
  console.log(title);
}
fixText();

function changeP () {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
  
}
changeP();

function showP() {
  let paragraphs = document.getElementsByTagName('p');
  for (i = 0; i < paragraphs.length; i +=1) {
    console.log(paragraphs[index].innerHTML)
  }
}
showP();