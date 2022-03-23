const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// // escreva filterPeople abaixo
// - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

// construir uma função filter people
// essa função vai retornar pessoas australianas que nasceram no seculo 20

const filterPeople = (array) => array.filter((element) => element.bornIn < 2001 && element.nationality === 'Australian')

console.log(filterPeople(people));

//alternativa:
// const filterPeople = (array) => array.filter(({nationality,bornIn}) => bornIn < 2001 && nationality === 'Australian')

// console.log(filterPeople(people));