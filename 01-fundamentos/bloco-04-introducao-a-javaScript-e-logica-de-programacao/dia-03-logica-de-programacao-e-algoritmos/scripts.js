// Exercício 1
// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.


let fatorial =1;

for (index = 10; index >0; index -=1) {
  fatorial *= index;
}
console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// Copiar


let word = 'tryber';
let drow = [];

for (index = word.length -1; index >= 0; index -=1){
  drow.push(word[index]);
}
console.log(drow);

// 3- Considere o array de strings abaixo:

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];