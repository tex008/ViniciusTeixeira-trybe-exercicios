const { encode, decode } = require('./encodeDecode.js');

describe ('testa a função encode', () => {
  it ('test if encode is a valid function', () => {
    expect(typeof encode === 'function').toBe(true);
  })
  it ('test if the input a returns the number 1', () => {
    expect(encode('a')).toMatch('1');
  })
  it ('test if the input e returns the number 2', () => {
    expect(encode('e')).toMatch('2');
  })
  it ('test if the input i returns the number 3', () => {
    expect(encode('i')).toMatch('3');
  })
  it ('test if the input o returns the number 4', () => {
    expect(encode('o')).toMatch('4');
  })
  it ('test if the input u returns the number 5', () => {
    expect(encode('u')).toMatch('5');
  })
  it ('test if the function does not change another caracteres than vogals', () => {
    expect(encode('vai um cafezin ai o filha da puta')).toMatch('v13 5m c1f2z3n 13 4 f3lh1 d1 p5t1');
  })
  it ('test if the function returns the same number of characters in the input', () => {
     expect(encode('alou').length).toEqual(4);
  })
})

describe('testa a função decode', () => {
  it ('test if decode is a valid function', () => {
    expect(typeof decode === 'function').toBe(true);
  })
  it ('test if the input 1 returns the letter a', () => {
    expect(decode('1')).toMatch('a');
  })
  it ('test if the input 2 returns the letter e', () => {
    expect(decode('2')).toMatch('e');
  })
  it ('test if the input 3 returns the letter i', () => {
    expect(decode('3')).toMatch('i');
  })
  it ('test if the input 4 returns the letter o', () => {
    expect(decode('4')).toMatch('o');
  })
  it ('test if the input 5 returns the letter u', () => {
    expect(decode('5')).toMatch('u');
  })
  it ('test if the function does not change another caracteres than vogals', () => {
    expect(decode('v13 5m c1f2z3n 13 4 f3lh1 d1 p5t1')).toMatch('vai um cafezin ai o filha da puta');
  })
  it ('test if the function returns the same number of characters in the input', () => {
    expect(decode('1l45').length).toEqual(4);
 })
})