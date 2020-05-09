const caller = require('../src/caller');
// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#Caller', () => {
  const fn = jest.fn();
  it('Teste de função', (done) => {
    caller(fn, 0, 1);
    expect(typeof fn).toBe('function');
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(0, 1);
    done();
  });
});
