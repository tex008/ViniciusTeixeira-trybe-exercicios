const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


function containsA() {
  return names.reduce((acc,curr) => acc + curr.split('').reduce((acumulador,letra) =>{
    if (letra ==='a' || letra === 'A') return acumulador +1
    return acumulador
  },0),0)
}



console.log(containsA())