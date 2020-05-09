const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greeting', () => {
  it('Return Hello param in sucess', () => {
    expect(typeof greeting).toBe('function');
    expect(greeting('Abacate')).toBe('Hello Abacate!');
    expect(greeting('Abacaxi')).toBe('Hello Abacaxi!');
    expect(greeting).toThrowError();
    expect(greeting).toThrowError('You must send something to greet!');
    expect(greeting).toThrowError(new Error('You must send something to greet!'));
  });
});
