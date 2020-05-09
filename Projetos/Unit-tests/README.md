# Boas vindas ao repositório do projeto de Testes Unitários em JavaScript!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Você implementará várias funções para atender aos requisitos propostos e testes unitários para garantir que sua implementação está correta.

---

## Desenvolvimento

Este repositório contém um _template_ de uma aplicação **NodeJS** (observe a existência do arquivo _package.json_).
Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional.
Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, **não** sendo necessária a criação de outros arquivos.
Você deverá completar as funções e testes unitários de forma a satisfazer os requisitos listados na próxima seção.

As funções a serem implementadas estão dentro da pasta `src` e seus respectivos testes estão na pasta `tests`.
O nome dos arquivos também seguem uma ordem definida. Basicamente, os arquivos de teste possuem o nome do arquivo alvo (arquivo da funcionalidade) acrescido do nome `.spec.js`.
Existirá um arquivo `src/blabla.js` que conterá a implementação de uma função e um arquivo `tests/blabla.spec.js` com os testes unitários referentes à função presente no arquivo `src/blabla.js`.

Cada função possui um bloco de comentários em suas primeiras linhas explicando qual é o trabalho que a função deve realizar.

---

## Requisitos do projeto

### 1 - Implemente os casos de teste no arquivo `tests/last.spec.js`

### 2 - Implemente os casos de teste no arquivo `tests/greeting.spec.js`

### 3 - Implemente a função do arquivo `src/numbers.js`

### 4 - Implemente os casos de teste no arquivo `tests/duplicate.spec.js`

### 5 - Implemente a função do arquivo `src/duplicate.js`

### 6 - Implemente os casos de teste no arquivo `tests/average.spec.js`

### 7 - Implemente a função do arquivo `src/average.js`

### 8 - Implemente os casos de teste no arquivo `tests/caller.spec.js`

### 9 - Implemente a função do arquivo `src/printBinary.js`

### 10 - Implemente os casos de teste no arquivo `tests/printBinary.spec.js`

### 11 - Implemente a função do arquivo `src/primeFactors.js`

### 12 - Implemente os casos de teste no arquivo `tests/primeFactors.spec.js` utilizando a biblioteca NodeJS Assert

### 13 - (BÔNUS) Implemente os casos de teste no arquivo `tests/rpnCalculator.spec.js`

### 14 - (BÔNUS) Implemente a função do arquivo `src/rpnCalculator.js`

Reverse Polish Notation é uma notação usada para representar expressões matemáticas.

A notação mais comum é: `3 + 4`.
Esta mesma expressão em _RPN_ (_Reverse Polish Notation_) é: `3 4 +`.
Basicamente na _RPN_ os **operadores** seguem seus **operandos**.
Isto faz com que essa notação não necessite de parênteses para representar precedencia em operações.

Vamos aos exemplos para que fique claro:

#### Expressão 1:
`3 + 4` => `3 4 +`

- `3 4 +` (realiza-se a soma `3 + 4` = `7`)
- `7`

#### Expressão 2:
`3 - 4 + 5` => `3 4 - 5 +`

- `3 4 - 5 +` (realiza-se a subtração `3 - 4` = `-1`)
- `-1 5 +` (realiza-se a soma `-1 + 5` = `4`)
- `4`

#### Expressão 3:
`3 - 4 * 5` => `3 4 5 * -`

- `3 4 5 * -` (realiza-se a multiplicação `4 * 5` = `20`)
- `3 20 -` (realiza-se a subtração `3 - 20` = `-17`)
- `-17`

#### Expressão 4:
`(3 - 4) * 5` => `3 4 - 5 *`

- `3 4 - 5 *` (realiza-se a subtração `3 - 4` = `-1`)
- `-1 5 *` (realiza-se a mutiplicação `-1 * 5` = `-5`)
- `-5`

#### Expressão 5:
`((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1))` => `15 7 1 1 + - / 3 * 2 1 1 + + -`

- `15 7 1 1 + - / 3 * 2 1 1 + + -` (realiza-se a soma `1 + 1` = `2`)
- `15 7 2 - / 3 * 2 1 1 + + -` (reliza-se a subtração `7 - 2` = `5`)
- `15 5 / 3 * 2 1 1 + + -` (realiza-se a divisão `15 / 5` = `3`)
- `3 3 * 2 1 1 + + -` (realiza-se a multiplicação `3 * 3` = `9`)
- `9 2 1 1 + + -` (realiza-se a soma `1 + 1` = `2`)
- `9 2 2 + -` (realiza-se a soma `2 + 2` = `4`)
- `9 4 -` (realiza-se a subtração `9 - 4` = `5`)
- `5`

#### Referência

[Reverse Polish Notation on Wikipedia](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

---

## Instruções para entregar seu projeto

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-02-week10-js-unit-tests.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-02-week10-js-unit-tests`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch para qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-js-unit-tests`

4. Faça as alterações em, por exemplo, alguma das funções que precisam de implementação. Por exemplo, a `last.js` em `src/`:
```jsx
function last(list) {
  // add your implementation here
  return list
}

module.exports = last
```

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listado o arquivo _src/last.js_ em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _src/last.js_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-js-unit-tests`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-02-week10-js-unit-tests/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-02-week10-js-unit-tests/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  6. `npm test` _(executa todos os testes presentes na aplicação)_
  7. `npm test path/to/file` _(executa apenas os testes presentes no arquivo path/to/file)_
    * exemplo: `npm test tests/average.spec.js`

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-02`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
