const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(typeof average).toBe('function');
    expect(average(3, 4, 5)).toBe(4);
    expect(average(3, 1)).toBe(2);
    expect(average(3, 12, 1, 2)).toBe(4.5);
    expect(average('a', 1)).toBe(undefined);
  });
});
