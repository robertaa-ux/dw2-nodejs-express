//DECLARANDO E EXIBINDO ITENS DE UM ARRAY
let produtos = [];
document.write(
  typeof (/*metodo usado para ver qual tipo da variavel*/ produtos),
);

let products = ["Computador ", "Notebook ", "Celular ", "Tablet."];
document.write(`<p>${products}</p>`);
document.write(`<p>Exibindo os elemtos do vetor atraves do indice: </p>`);
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

//Exibindo com função anonima
document.write(`<p>Exibindo elementos do vetor atraves do forEach: </p>`);
products.forEach(function (product) {
  document.write(`<p>${product}</p>`);
});

/*document.write(`<p>Exibindo elementos do vetor atraves do forEach: </p>`);
products.forEach( (product) => {
  document.write(`<p>${product}</p>`);
});*/

document.write(
  `<p>Exibindo elementos do vetor atraves do forEach com os indices: </p>`,
);
products.forEach((product, i) => {
  document.write(
    `<p>${i + 1 /*"+1" para o indicie exibido começar com 1 ao inves de 0*/} - ${product}</p>`,
  );
});

//METODODOS DE MANIPULAÇÃO DE VETORES
let frutas = ["Laranja", " Maça", " Banana"];
document.write(`<p>Nossa lista de fruta é: ${frutas}.</p>`);
frutas[3] = " Morango";
document.write(`<p>Agora nossa lista de frutas é: ${frutas}.</p>`);

document.write(
  `<h4>O método PUSH - insere um novo elemento no FINAL do vetor.</h4>`,
);
frutas.push(" Abacaxi");
document.write(`<p>Agora nossa lista de frutas é: ${frutas}.</p>`);

document.write(
  `<h4>O método UNSHIFT - insere um novo elemento no INICIO do vetor.</h4>`,
);
frutas.unshift(" Pera");
document.write(`<p>Agora nossa lista de frutas é: ${frutas}.</p>`);

// COMO CONTAR OS ELEMENTOS DE UM VETOR - Metodo LENGTH
const items = frutas.length;

document.write(`<p>Na nossa lista temos ${items} frutas.</p>`);
