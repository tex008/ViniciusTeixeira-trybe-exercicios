const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

//7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário

//fazer uma função.
//função retornara um booleano
//SE nehhum autor tenha nascido no mesmo ano
//função irá retornar true
//SE NÃO
// função irá retornar true

// const expectedResult = false;

function authorUnique(xablau) {
  let birthAgeDifferent = true;
   // escreva seu código aqui
  xablau.forEach((book,index) => {
    xablau.forEach((book2,index2) => {
    if (index === index2) { 
      return ;
    } 
    if (book.author.birthYear === book2.author.birthYear) {
      birthAgeDifferent = false;
    } 
    });
  });
    return birthAgeDifferent;
}
console.log(authorUnique(books));


// const expectedResult = false;

// function authorUnique() {
//   return books.every((book) =>
//     !books.some((bookSome) =>
//       (bookSome.author.birthYear === book.author.birthYear)
//       && (bookSome.author.name !== book.author.name)));
// }

// console.log(authorUnique());













































// console.log(authorUnique());

// function authorUnique() {
//   const expectedResult = false;
//   // escreva seu código aqui
//   books.forEach((book) => {
//     if (book.author.birthYear !== book.author.birthYear) {
//       return expectedResult;
//     } else {
//       return !expectedResult;
//     }
//   });
  
// }
// console.log(authorUnique(books));

// function authorUnique() {
//   const expectedResult = false;
//   // escreva seu código aqui
//   const verifyBirthAge = books.forEach((book) => {
//     (book.author.birthYear !== book.author.birthYear);
//   if (verifyBirthAge === true) {
//     return expectedResult;
//   } else {
//     return !expectedResult;
//   }
// }
// function authorUnique() {
//   const expectedResult = false;
//   // escreva seu código aqui
//   const verifyBirthAge = books.forEach((book) => {
//     (book.author.birthYear !== book.author.birthYear);
//   if (verifyBirthAge === true) {
//     return expectedResult;
//   } else {
//     return !expectedResult;
//   }
// }


// const expectedResult = false;

// function authorUnique() {
//   // escreva seu código aqui
//   const authors= (book) => {
//     if (books.every(book.author.birthYear) !== books.every(book.author.birthYear)) {
//       return true;
//     } else{
//       return false;
//     }
//     // return books.every(book);
//   }
// }
// console.log(authorUnique(books));

// const expectedResult = false;

// function authorUnique() {
//   return books.every((book) =>
//     !books.some((bookSome) =>
//       (bookSome.author.birthYear === book.author.birthYear)
//       && (bookSome.author.name !== book.author.name)));
// }
