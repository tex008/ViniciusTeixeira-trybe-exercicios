// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Copiar
// Bem-vinda, Margarida

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log("Bem-vinda, " + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

//  info["recorrente"] = "Yes";
//  console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente

//  for (let key in info) {
//   console.log(key);
//  }

//  4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Copiar
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

//  for (key in info) {
//    console.log(info[key]);
//  }


//  5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Copiar
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Yes",
// }
 
// console.log(info.personagem + " e " + info2.personagem);
// console.log(info.origem + " e " + info2.origem);
// console.log(info.nota + " e " + info2.nota);
// console.log("Ambos recorrentes");

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: 
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
  
// };

// console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor['livrosFavoritos']['titulo'] + "!");

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

  // leitor.livrosFavoritos = [
  //   {
  //     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  //     autor: 'JK Rowling',
  //     editora: 'Rocco',
  //   },
  //   {
  //     titulo: "O Pior Dia de Todos",
  //     autor: 'Daniela Kopsch',
  //     editora: 'Tordesilhas',
  //   },
  // ];

  // console.log(leitor.livrosFavoritos);
  
  // 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

  // console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");














  // PARTE 2 - FUNÇÕES
  // 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function isPalindrome (word) {
//   let drow = word.split('').reverse().join('')
//   if (drow === word) {
//     return console.log(word + " is a palidrome");
//   } else {
//     return console.log(word + " is not a palindrome");
//   }
// }

// isPalindrome("oooo")

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function topValue(array){
//   let biggestValue = 0;
//   for (let index in array){
//     if (array[topValue] < array[index]) {
//       biggestValue = array[index]
//     }
//   } return biggestValue;
// }
// // console.log(topValue([2, 3, 6, 7, 10, 1]));

// function indiceMaior (array){
//   let indiceMaior = 0;
//   for (let indice in array){
//     if (array[indiceMaior] < array[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   console.log(indiceMaior);
// }
// indiceMaior([2, 3, 6, 7, 10, 1]);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function menorIndice (array) {
//   let menorIndice = 0;
//   for (let indice in array) {
//     if (array[menorIndice] > array[indice]) {
//         menorIndice = indice
//     };
//   };
//    console.log(menorIndice)
// };
//   menorIndice([2, 4, 6, 7, 10, 0, -3]);

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorNome (array) {
//   let nomeMaior = "";
//   for (let index in array){
//     if (array[index].length > nomeMaior.length){
//       nomeMaior = array[index];
//     }
//   }
//   console.log(nomeMaior);
// } 


// maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepete (array) {
//   let maisVezesSeRepete = 0;
//   let numeroDeRepeticoes = 0;
//   let indexNumeroMaisAparece = 0;
  
//   for (index in array ){
//     for (index2 in array){
//       if (array[index] === array[index2]) {
//         numeroDeRepeticoes = numeroDeRepeticoes + 1;
//       }
//     } if (numeroDeRepeticoes > maisVezesSeRepete) {
//       maisVezesSeRepete = numeroDeRepeticoes
//       indexNumeroMaisAparece = array[index]
//     }
//     numeroDeRepeticoes = 0;
//   } console.log(indexNumeroMaisAparece);
// } 

// maisRepete([2, 3, 2, 5, 8, 2, 3])

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// function sum(number) {  
//     let somatorio = 0;
//     for (let index = 1; index <= number; index +=1) {
//       somatorio = somatorio + index; 
//     }
//     console.log(somatorio);
// };

// sum(5);

// function sum (number) 
// {
//   if (number > 0) {
//     let somatorio =0;
//     for (i in number) {
//         somatorio += number[index];
//     }
//     console.log(somatorio);
//   } else {
//       console.log("Number not valid")
//   };


// };
 
// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verify (stringWord, stringEnding) {
  let wordArray = stringWord.split('');
  let endingArray = stringEnding.split('');
  let matches = 0;

  for (let index in wordArray){
    for (let index2 in endingArray) {
      if (index2 === index) {
        matches +=1;
      }
    }
  } if (matches == stringEnding.length){
      console.log("true");
  } else {
      console.log("false");
  }
}

verify("coco","co");