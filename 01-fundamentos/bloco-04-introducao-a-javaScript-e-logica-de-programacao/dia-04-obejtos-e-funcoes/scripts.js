
// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden : 2,
//     silver :3,
//   },
//   bestInTheWorld: [2006, 2007,2008,2009,2010,2018],
   
// };

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " de idade");
// console.log(player.bestInTheWorld);
// console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por 6 vezes ");
// console.log(player.medals);
// console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

//   for (let name in names) {
//     console.log(names[name])
//   }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }; 

  for (let info in car) {
    console.log(info + ": " + car[info]);
  }