const sum = (...values) => values.reduce((acc,value) => acc + value ,0)

const numbers = [100,200,300];
console.log(sum(1,2,3,4,5,...numbers));