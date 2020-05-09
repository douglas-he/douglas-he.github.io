/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(string) {
  if (string === undefined) throw new Error();
  const arr = [];
  const operadores = ['+', '-', '/', '*'];
  string.split(' ').forEach((Element) => {
    if (+Element) {
      arr.push(Element);
    } else if (operadores.some(operador => operador === Element)) {
      arr.push(this.eval(arr.splice(-2, 1)[0] + Element + arr.pop()));
    } else {
      throw new Error();
    }
  });
  return arr[0];
}
module.exports = rpnCalculator;
