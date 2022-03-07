// exercícios dia 01 - parte 1
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo!`);
} else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }   
}
testingScope(true);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// na mão:
// const sortedArrays =  () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;

// }

// const sortArrays = sortedArrays();
// console.log(`Os números ${sortArrays} se encontram ordenados de forma crescente!`); 

// bonus:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrays = array => {
  const sortedArrays = array.sort((a,b) => a - b);
  return sortedArrays;
}

const arraySorted = sortArrays(oddsAndEvens);
console.log(`Os números ${arraySorted} estão ordenados em ordem crescente!`)

// Parte 2

// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// função normal
function nFactorial(number) {

  let fatorial = 1;

  if (number > 0) {
    for (let index = 2; index <= number; index++) {
      fatorial *= index ;
    }
  } console.log(fatorial)

}

nFactorial(3);

// funão linear ternary operator
const nFactorial = number => number > 1 ? number * nFactorial(number -1) : 1;
console.log(nFactorial(5));