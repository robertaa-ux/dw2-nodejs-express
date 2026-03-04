// OBJETOS LITERARIS NO JAVASCRIPT - Objetos que não veem de uma classe
document.write(
  `<h4>Objetos literais possuem ATRIBUTOS (Prpriedades) e METODOS (Funções)</h4>`,
);

const pessoa = {};
document.write(typeof pessoa);

// CRIANDO OBJETO
const carro = {
  //PROPRIEDADES
  modelo: "gol",
  cor: "vermelho",
  //MEDODOS
  acelerar() {
    return "Vrummmmmmm...";
  },
  frear() {
    return "Freando...";
  },
};
document.write(`<p>O modelo do carro é : ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é: ${carro.cor}</p>`);
document.write(`<p>Quando o carro acelera ele faz: ${carro.acelerar()}</p>`);
document.write(`<p>Ativando os freios: ${carro.frear()}</p>`);

//MANIPULANDO ARRAYS DE OBJETO
const productList = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Sansung",
    preco: 2000,
    descricao: "Otima velocidade de processamento.",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente.",
  },
];

// EXIBINDO O ARRAY DE OBJETOS ATRAVES DO FOREACH
document.write(`<h4>Exibindo o array de objetos atraves do forEach: </h4>`);
productList.forEach((product) => {
  document.write(`
        Produto: ${product.nome}<br>
        Marca: ${product.marca} <br>
        Preço: ${product.preco} <br>
        Descrição: ${product.descricao} <br><br>`);
});
