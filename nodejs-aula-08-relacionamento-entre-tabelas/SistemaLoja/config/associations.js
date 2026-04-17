// ESSE ARQUIVO VAI IMPOPRTAR AS ASSOIAÇÕES DAS TABELAS
// Importando os Models
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

// Definindo as associações entre os Models
const associations = () => {
    // Um cliente possui muitos Pedidos
    Cliente.hasMany(Pedido, {foreignKey: "cliente_id"});
    // Um Pedido possui um Cliente
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"});
};

export default associations;