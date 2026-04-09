//Importando a ORM Sequelize
import Sequelize from "sequelize";

//Definindo os dados da conexão com o banco de dados
const connection = new Sequelize({
    //Tipo do banco
    dialect: "mysql",
    //Endereço do banco
    host: "localhost",
    //Nome do usuario
    username: "root",
    //Senha
    password: "",
    //Fuso horário
    timezone: "-03:00",
    //Nome do banco que sera usado na aplicação
    database: 'sistemaloja',
});
// Exportando o módulo
export default connection;
