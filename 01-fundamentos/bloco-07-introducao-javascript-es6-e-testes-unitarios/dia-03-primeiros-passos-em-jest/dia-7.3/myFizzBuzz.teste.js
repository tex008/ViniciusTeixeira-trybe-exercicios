const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
  it('deve informar que a função myFizzBuzz é uma função ', () => {
    expect(typeof myFizzBuzz === 'function').toBe(true);
  });
  test('a number divisble by 3 and 5 must return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it ('a number divisble by 3 must return fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });
  test ('a number divisble by 5 must return buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  it ('a number not divisble by 3 neither 5 must return the number itself', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  test('if the parameter is not a Number, must return an error', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  })
})