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
  

// // exercise 3

// let sum = 0; 
// let maxValue=0;

// for (let index = 0 ;index < numbers.length; index += 1){
//    sum = number[index] + number
//  } 
//   console.log(sum);