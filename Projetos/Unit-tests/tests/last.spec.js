const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('return last element', () => {
    expect(typeof last).toBe('function');
    expect(last(1, 3, 4, 10)).toBe(10);
    expect(last('a', 3, 'c', 10, 'e')).toBe('e');
    expect(last([0, 1, 2, 5, 7, 9, 'a', 15])).toBe(15);
    expect(last('Abacate é verde')).toBe('e');
    expect(last('Abacate', 'é', 'verde')).toBe('verde');
  });
});
