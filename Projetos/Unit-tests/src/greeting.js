/*
  A função greeting recebe um parâmetro ${param} e retorna "Hello ${param}!"
  Caso o parâmetro ${param} não seja enviado,
  um erro é lançado com a mensagem "You must send something to greet!"
*/

function greeting(param) {
  if (!param) throw new Error('You must send something to greet!');
  return `Hello ${param}!`;
}

module.exports = greeting;
