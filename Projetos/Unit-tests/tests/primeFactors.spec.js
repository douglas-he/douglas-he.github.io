const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
it('testes prime', () => {
  assert.strictEqual(typeof primeFactors, 'function');
  assert.deepStrictEqual(primeFactors(10), [2, 5]);
  assert.deepStrictEqual(primeFactors(-10), []);
  assert.throws(() => { primeFactors('Abacate'); });
});
