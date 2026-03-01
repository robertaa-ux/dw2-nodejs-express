// TIPOS DE FUNÇÕES
// FUNÇÃO SIMPLES
function showMessage() {
  const messege = "<h2>Olá bem-vindo!!</h2>";
  document.write(messege);
}

// INVOCANDO A FUNÇÃO
showMessage();

// FUNÇÃO COM PARAMETRO / ARGUMENTO
const user = "Roberta Costa";

function showUserMessage(user) {
  // ESSA FUNÇÃO RECEBE UM PARAMETRO
  document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
}

showUserMessage(user); //ENVIO DE ARGUMENTO

// FUNÇÃO COM MAIS DE UM PARAMETRO
const n1 = 10;
const n2 = 5;

function sum(n1, n2) {
  //ESSA FUNÇÃO RECEBE DOIS PARAMETROS
  let result = n1 + n2;
  document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.</p>`);
}
// INVOCANDO A FUNÇÃO
sum(n1, n2); // ENVIANO OS ARGUMENTOS

// FUNÇÃO COM RETORNO
const num1 = 50;
const num2 = 3;

// É INDICADO QUE AS FUNÇOES POSSUAM O MINIMO DE RESPONSABILIDADES POSSIVEIS
// ESSA FUNÇÃO IRA MULTIPLICAR DOIS NUMEROS
function mult(num1, num2) {
  return num1 * num2;
}

document.write(`O resultado é ${mult(num1, num2)}.`);

// FUNÇÃO COM RETORNO CONDICIONAL
const number = 7;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p>O número ${number} é ${parImpar(number)}.</p>`);

// FUNÇÃO ANÕNIMA
const divisao = function (n /*numero*/) {
  return n / 2;
};
let numero = 200;

document.write(`<p>A metade de ${numero} é ${divisao(numero)}.</p>`);

// FUNÇÃO SETA (ARROW FUNCTION) -> É UM TIPO DE FUNÇÃO ANONIMA
const dobro = (x) => {
  return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.`);

// ARROW FUNCTION COM MAIS DE UM PARAMETRO
const calculadora = (a, operador, b) => {
  return eval(`${a} ${operador} ${b}`);
};

document.write(
  `<p>O resultado da operação matematica é ${calculadora(1100, "-", 1)}.</P>`
);
<<<<<<< HEAD


=======
>>>>>>> a6626ff8e18b6272d93974f581204cd51f3898db
