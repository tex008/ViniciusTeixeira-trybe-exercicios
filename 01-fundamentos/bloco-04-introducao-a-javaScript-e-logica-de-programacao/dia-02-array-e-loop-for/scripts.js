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


let sumOfElements = 0;

for (let index = 0 ;index < numbers.length; index += 1){
   sumOfElements += numbers[index];
 } 
  console.log(sumOfElements);

let numberOfElements = numbers.length;
let numbersAverage = sumOfElements / numberOfElements;
 console.log(numbersAverage);

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

// exercise 5 --> Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// exercise 3 - para execucao desse exercicio foi consultado o repositorio de exercicios do aluno Thiago da tribo 20-A. Username do github: @Thiagofs1983Thiagofs1983. link :https://github.com/Thiagofs1983/trybe-exercicios/pull/13/commits/e9b018cb73a54fddc717e1d3f503c083c79956be
  // deixar uma variavel para receber o valor do indice atual do array. SE o resultado for menor do que o valor atual do array, este indice atual se torna o novo valor de resultado (resultado = numbers.[index]). E ai a cada mudanca de indice, essa comparacao pode ser refeita para todos os indices do array, sendo que o maior valor sempre se tornara o valor de resultado. IMprimindo o resultado, imprime-se o maior valor


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0 ;index < numbers.length; index += 1){
  if (resultado < numbers[index]) {
    resultado = numbers[index];
  }
}
console.log(resultado);


// exercise 6 --> Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !==0){
      odd += 1;
    }
  }
  console.log(odd);



// exercise 7 --> Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// exercise 8 -->Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
 
// exercise 9 -->Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .