//FUNÇÃO SIMPLES
function dados() {
  document.write("Roberta tem 19 anos de idade e mora na cidade de Cajati!");
}
dados();

//FUNÇÃO COM PARAMETROS
const n1 = 10;
const n2 = 5;

function divisao(n1, n2){
    let result = n1 / n2;

    document.write(`<p>O resultado da divisão é ${result}.</p>`)
}
divisao(n1, n2);

//FUNÇÃO COM RETORNO
const num1 = 10;
const num2 = 10;
const num3 = 10;
 
function multiplicacao(num1, num2, num3){
    return num1 * num2 * num3;
}
document.write(`<p>O resultado da multiplicação é ${multiplicacao(num1, num2, num3)}</p>`);

//FUNÇÃO COM MAIS DE UM RETORNO
const idade = 8;

function maiorOuMenor(idade){
    if( idade >= 18){
        return "Maior de idade.";
    } else {
        return "Menor de idade.";
}
}
 document.write(`<p>${maiorOuMenor(idade)}</p>`);

 //FUNÇÃO ANONIMA
 const media = function(nota1, nota2){
    if( nota1 + nota2 /2 <= 5){
        return "Reprovado :(";
    } else {
        return "Aprovado :)";
    }
 }
 let nota1 = 6;
 let nota2 = 8;
document.write(`<p>O aluno foi ${media(nota1, nota2)}</p>`);

//ARROW FUNCTION COM PARAMETRO UNICO
const triplo = x => {
  return x * 3;
};
const x = 6;
document.write(`<p>O triplo de ${x} é ${triplo(x)}.`);

//ARROW FUNCTION COM MAIS DE UM PARAMETRO
const soma = (a, b, c, d) => {
    return a + b + c + d;
};
const a = 2;
const b = 7;
const c = 4;
const d = 1;
document.write(`<p>A soma entre os numeros ${a}, ${b}, ${c} e ${d} é igual a ${soma(a, b, c, d)}.</p> `)