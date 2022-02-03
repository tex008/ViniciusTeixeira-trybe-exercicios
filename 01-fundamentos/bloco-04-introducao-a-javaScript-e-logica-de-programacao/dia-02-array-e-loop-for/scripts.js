// bloco 4.2
//exercise 1//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let index = 0 ;index < numbers.length; index += 1){
    console.log(numbers[index]);
  }

//  exercise 2
//   para realizar esse exercicio foi consultado o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//   O metodo reduce vai executar uma funcao que eu vou criar que vai ser aplicada em cada elemento de uma Array, e vai retornar em somente um valor. No caso, vai somar o elemento anterior com o atual e manter essa ordem somatoria para todos os elementos.


const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(numbers.reduce(reducer));
  

// // exercise 3 - para execucao desse exercicio foi consultado o repositorio de exercicios do aluno Thiago da tribo 20-A. Username do github: @Thiagofs1983Thiagofs1983. Link: https://github.com/Thiagofs1983/trybe-exercicios/pull/13/commits/fded99743301435b75ec8fdb59dfd3f8554f84d0
// usando o += eu consigo somar os indices a uma mesma variavel, pois desta forma a variavel guardara o valor da soma no indice atual. 


// let sumOfElements = 0;

// for (let index = 0 ;index < numbers.length; index += 1){
//    sumOfElements += numbers[index];
//  } 
//   console.log(sumOfElements);

// let numberOfElements = numbers.length;
// let numbersAverage = sumOfElements / numberOfElements;
//  console.log(numbersAverage);

//  exercise 4 - vou comentar o exericio anterior porque o codigo sera repetido neste exericio, com adaptacoes

let sumOfElements = 0;

  for (let index = 0 ;index < numbers.length; index += 1){
    sumOfElements += numbers[index];
  }
    
let numberOfElements = numbers.length;
let numbersAverage = sumOfElements / numberOfElements;

  if (numbersAverage > 20) {
    console.log("valor maior que 20.");
  } else {
    console.log("valor menor ou igual a 20.");
  }
