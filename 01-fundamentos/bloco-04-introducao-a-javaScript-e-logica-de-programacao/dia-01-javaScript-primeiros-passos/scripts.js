// //programa 1//
// const numA = 10;
// const numB = 5;

// console.log(numA + numB);
// console.log(numA - numB);
// console.log(numA * numB);
// console.log(numA - numB);
// console.log(numA % numB);

// // //programa 2//
// const numC = 82;
// const numD = 35;

// if (numC > numD) {
//   console.log(numC);
// } else {
//     console.log(numD);
// }

// //programa 3//
// const numE = 10;
// const numF = 15;
// const numG = 20;

// if (numE > numF && numE > numG) {
//   console.log(numE);
// } else if (numF > numE && numF > numG){
//     console.log(numF);
// } else if(numG > numE && numG > numF){
//     console.log(numG);
// }

// //programa 4//
// const numH = 8;

// if (numH == 8) {
//   console.log("positive")
// } else {
//     console.log("negative")
// }

// //programa 5//
// const angulo1 = 90;
// const angulo2 = 45;
// const angulo3 = 45;

// if (angulo1 + angulo2 + angulo3 == 180) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// //programa 6//
// const pawn ="foward";
// const bishop ="diagonals";
// const tower ="foward and to the sides";
// const horse ="l";
// const queen ="anywhere";
// const king ="anywhere but 1 square at the time ";

// function returnChessPiece () {
//   const name =prompt("Insert an piece of chess").toLowerCase();
//   if (name === "pawn") {
//     return console.log(pawn);
//   } else if (name === "bishop") {
//     return console.log(bishop);
//   } else if (name === "tower") {
//     return console.log(tower);
//   } else if (name === "horse") {
//     return console.log(horse);
//   } else if (name === "queen") {
//     return console.log(queen);
//   } else if (name === "king") {
//     return console.log(king);
//   } else {
//     console.log("Piece not recognized. Please try again.")
//   }
// }  returnChessPiece ();

// //programa 7//
// function convergePercentage (){  
// let percent =prompt("Insert value");
// let result = parseFloat(percent)/100;

//   if (result >=0.9) {
//     console.log("A");
//   } else if (result >=0.8) {
//     console.log("B");
//   } else if (result >=0.7) {
//     console.log("C");
//   } else if (result >=0.6) {
//     console.log("D");
//   } else if (result >=0.5) {
//     console.log("E");
//   } else if (result <0.5) {
//     console.log("F");
//   } else {
//     console.log("Please try again.")
//   }  
//     return
//   }
// convergePercentage();

// //programa 8//
// const numI = 2;
// const numJ = 3;
// const numK = 45;

//  if (numI % 2===0 || numJ % 2===0 || numG % 2===0) {
//     console.log("true");
//  } else {
//    console.log("false");
//  }

//  //programa 9
// const numL = 2;
// const numM = 10;
// const numN = 4;

//  if (numL % 2 !== 0 || numM % 2 !== 0 || numN % 2 !== 0) {
//     console.log("true");
//  } else {
//    console.log("false");
//  }

//  //programa 10//
// function calculateProfit () {

// const productCost =Number(prompt("Inser product Cost"));
// const productSellValue =Number(prompt("Inser sell value"));
// const taxes = productCost * 0.2;
// const totalCost = productCost + taxes;
// const profit = (productSellValue * 1000) - (totalCost * 1000);

//   if (productCost <=0 || productSellValue <=0) {
//     console.log("Please try again")
//     calculateProfit ();
//   } else {
//     console.log(profit);
//   }
// }
// calculateProfit()

//programa 11//
function calculateLiquidSalary() {
  const salary = Number(prompt("Insert gross salary"));
  let inss = 0;
  let irAliquot = 0;
  let deduction = 0;

    //para o INSS//
    if (salary <= 1556.94) {
      inss = 0.08;
    } else if (salary <= 2594,92) {
      inss = 0.09;
    } else if (salary <= 5189.82) {
      inss = 0.11;
    } else if (salary > 5189.82) {
      inss = 570.88;
    }

    let baseSalary = salary - (salary * inss);

    //para o IR//
    if (baseSalary <= 1903.98) {
      irAliquot = 0;
    } else if (baseSalary <= 2826.65) {
      irAliquot = 0.075;
      deduction = 142.80;
    } else if (baseSalary <= 3751.05) {
      irAliquot = 0.15;
      deduction = 354.80;
    } else if (baseSalary <=4664.68) {
      irAliquot = 0.225;
      deduction = 636.13;
    } else {
      irAliquot = 0.275;
      deduction = 869.36;
    }

  
  let irValue = (baseSalary * irAliquot) - deduction;
  let liquidSalary = baseSalary - irValue;

  console.log(liquidSalary);  

}

calculateLiquidSalary();