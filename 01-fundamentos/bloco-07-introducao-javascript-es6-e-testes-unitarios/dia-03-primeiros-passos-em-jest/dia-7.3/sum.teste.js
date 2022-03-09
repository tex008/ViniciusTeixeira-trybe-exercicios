// const sum = require('./sum.js');


// describe('testa a função sum',() => {
//   test('deve informar que a função sum é uma função ', () => {
//     expect(typeof sum === 'function').toBe(true);
//   });
//   test('testa o resultado da soma ', () => {
//     expect(sum(4,5)).toBe(9);
//     expect(sum(0,0)).toBe(0);
//   });
//   test('retorna erro quando um dos valores é uma string', () => {
//     expect( () => {sum(4,'5')}).toThrow();
//   });
//   test ('retorna mensagem de erro quando um dos valores é uma string', () => {
//     expect(() => {sum('4',5)}).toThrowError('parameters must be numbers')
//   });
// })  