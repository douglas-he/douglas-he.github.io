const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('typeof', () => {
    expect(typeof printBinary).toBe('function');
  });

  it('should print binary numbers until 1', (done) => {
    expect(printBinary(1)).toEqual(['0', '1']);
    done();
  });

  it('should print binary numbers until 2', (done) => {
    expect(printBinary(2)).toEqual(['00', '01', '10', '11']);
    done();
  });

  it('Array void', (done) => {
    expect(printBinary(0)).toEqual([]);
    expect(printBinary()).toEqual([]);
    expect(printBinary('Abacate')).toEqual([]);
    done();
  });
});
