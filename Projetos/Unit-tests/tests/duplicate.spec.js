const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('test typeof', () => {
    expect(typeof duplicate).toBe('function');
  });

  it('the params 1, 2, 3 are not duplicated', (done) => {
    expect(duplicate(1, 2, 3)).toBeFalsy();
    done();
  });

  it('the params 1, 2, 3, 2 are duplicated', (done) => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
    done();
  });

  it('the params Abacate and Abacaxi are duplcated', (done) => {
    expect(duplicate('Abacate', 'Abacaxi', 'Abacate')).toBeTruthy();
    done();
  });

  it('the params Abacate and Abacaxi are duplicated', (done) => {
    expect(duplicate('Abacate', 'Abacaxi')).toBeFalsy();
    done();
  });
});
