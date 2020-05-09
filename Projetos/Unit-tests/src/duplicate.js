/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  return params.some((elem, pos) => params.indexOf(elem) !== pos);
}

module.exports = duplicate;
