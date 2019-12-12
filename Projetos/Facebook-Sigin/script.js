/* global Pikaday */
const regexNome = new RegExp(/[a-zA-Z]/);
const regexTelefone = new RegExp(/[0-9]{11}/);
const regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const data = new Pikaday({
  field: document.getElementById('datepicker'),
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  firstDay: 1,
  maxDate: new Date(2019, 11, 31),
  yearRange: [1905, 2020],
});

const botaoAzul = document.getElementsByClassName('azul')[0];
botaoAzul.addEventListener('click', function () {
  const botoesLogin = document.querySelectorAll('.primeirosInputs');
  if (botoesLogin[0].value === '') {
    alert('O campo Email ou telefone não pode estar vazio');
  } else if (!regexEmail.test(botoesLogin[0].value) && !regexTelefone.test(botoesLogin[0].value)) {
    alert('Email ou Telefone Invalido');
  } else if (botoesLogin[1].value === '') {
    alert('O campo Senha não pode estar vazio');
  } else {
    alert('Login realizado com sucesso');
  }
  event.preventDefault();
});

const cadastro = document.querySelector('.btn');
cadastro.addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const novasenha = document.getElementById('novasenha').value;
  const emailOuPassword = document.getElementById('emailoupassword').value;
  const options = document.querySelectorAll('.option');
  const dateComparer = document.getElementById('datepicker').value;
  event.preventDefault();
  if (!regexNome.test(nome)) {
    alert('Nome inválido');
  } else if (!regexNome.test(sobrenome)) {
    alert('Sobrenome inválido');
  } else if ((!regexTelefone.test(emailOuPassword)) && (!regexEmail.test(emailOuPassword))) {
    alert('E-mail ou Telefone inválido');
  } else if (novasenha === '') {
    alert('Nova senha inválida');
  } else if (dateComparer === '') {
    alert('Selecione a data');
  } else if (!options[0].checked && !options[1].checked && !options[2].checked) {
    alert('Você deve selecionar o seu gênero');
  } else {
    const genero = (document.querySelector('input[name="Gênero"]:checked').value);
    alert(` Conta criada com sucesso!
    Nome: ${nome}
    Sobrenome: ${sobrenome}
    Nova senha: ${novasenha}
    E-mail/Telefone: ${emailOuPassword}
    Nascimento: ${data}
    Gênero: ${genero}`);
  }
});
