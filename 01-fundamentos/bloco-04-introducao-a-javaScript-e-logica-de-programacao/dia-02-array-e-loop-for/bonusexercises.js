//questão bonus
// Com base na leitura que fez, considere o array numbers abaixo e faça os exercícios:
// Copiar
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index+=1){
  for (index2 = 0; index2 < index; index2 +=1){
    if (numbers[index] < numbers[index2]){
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    }
  }
} console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index+=1){
  for (index2 = 0; index2 < index; index2 +=1){
    if (numbers[index2] < numbers[index]){
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    }
  }
} console.log(numbers);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 

// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte).

// Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

// Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// Copiar

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newNumbersArray = [];

// for (let index = 0; index < numbers.length; index+=1){
//   for (let index2 = 1; index2 < numbers.length; index2 +=1){
//       let newValue = (numbers[index] * numbers[index2]);
//       newNumbersArray.push(newValue);
//       numbers[index] = numbers[index2];
//       numbers[index2] = numbers[index2];
//   }
// } console.log(newNumbersArray);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbersArray = [];

  for (let index = 0; index < numbers.length; index+=1) {

    if (index + 1 < numbers.length) {
      let newValue = (numbers[index] * numbers[index +1]);
      newNumbersArray.push(newValue);
      numbers[index] = numbers[index +1]; 
    } else {
      let newValue = numbers[index] * 2;
      newNumbersArray.push(newValue);
    }    
  
  }
 console.log(newNumbersArray);

