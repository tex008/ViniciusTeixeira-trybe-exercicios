/*
02 - Contar até 10
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.
*/


  // Desenvolva seu código nessa função
  let limit = 10;
  let accumulator = 1;

  for (index = 1; index <= limit; index +=1){
    accumulator = accumulator +1;
  }

  console.log(accumulator)



