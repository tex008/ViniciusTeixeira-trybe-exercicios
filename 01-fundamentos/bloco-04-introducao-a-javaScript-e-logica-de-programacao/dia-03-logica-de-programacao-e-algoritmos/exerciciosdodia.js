// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let sum =0;

for (let index = 1; index <=50; index +=1) {
  sum += index 
} console.log(sum);

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let numero2 = [];

for (let index = 2; index <=150; index +=1) {
    if (index % 3 == 0) {
      numero2.push(index);
    } 
}
    if (numero2.length == 50) {
      console.log("50 valores !!! bingo")
    }

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "";
let player2 = "";

