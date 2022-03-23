const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

// Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

function nomeProdutos (object) {
  const arrayProdutos= [];
  object.forEach((element) => {
    if (element.id % 2 === 0) {
      arrayProdutos.push(element.name);
    }
  });
  return arrayProdutos;
}
console.log(nomeProdutos(techProducts));

// Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
function verifyPrice (array) {
  // let priceHigh ;
  // array.some((element) => {
  //   if (element.price > 300 ) {
  //     priceHigh =true
  //   } else {
  //     priceHigh = false;
  //   }
  // });
  //  return priceHigh;
  const result = array.some((object) => object.price > 300);
  return result;
}

console.log(verifyPrice(techProducts));
// Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
function returnTotalPrice (array, id, amount) {
  const element = array.find((element) => element.id === id);
  return element.price * amount;
  
}

console.log(returnTotalPrice(techProducts,2,2));
