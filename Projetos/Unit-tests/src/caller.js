/*
  A função caller recebe uma função ${fn} e dois parâmetros ${a} e ${b}
  e retorna o resultado da chamada de ${fn} com os parâmetros ${a} e ${b}

  exemplo:

  caller(some, a, b)

  é a mesma coisa que:

  some(a, b)
*/

function caller(fn, a, b) {
  return fn(a, b);
}

module.exports = caller;
