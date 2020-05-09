const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os testes
describe('#rpnCalculator', () => {
  it('Type function', () => {
    expect(typeof rpnCalculator).toBe('function');
  });
  it('Valida operadores', () => {
    expect(rpnCalculator).toThrowError(new Error());
    expect(() => { rpnCalculator('!!!!!!!'); }).toThrowError();
  });
  it('Valida função correta', () => {
    expect(rpnCalculator('3 4 +')).toBe(7);
    expect(rpnCalculator('3 4 - 5 +')).toBe(4);
    expect(rpnCalculator('3 4 5 * -')).toBe(-17);
    expect(rpnCalculator('3 4 - 5 *')).toBe(-5);
    expect(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -')).toBe(5);
  });
});
