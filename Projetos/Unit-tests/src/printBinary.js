/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */
function criaArray(arr, number) {
  for (let i = 0; i < 2 ** number; i += 1) {
    arr.push(i.toString(2));
  }
  return arr;
}
function mape(arr, number) {
  const controle = arr.map((Element) => {
    if (Element.length < number) {
      Element = '0'.repeat(number - Element.length) + Element;
    } return Element;
  });
  return controle;
}

function printBinary(number) {
  let arr = [];
  if (number !== 0 && typeof number === 'number') {
    arr = criaArray(arr, number);
    return mape(arr, number);
  } return arr;
}

module.exports = printBinary;
