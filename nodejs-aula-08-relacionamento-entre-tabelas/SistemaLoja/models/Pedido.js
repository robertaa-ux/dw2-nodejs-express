import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const pedido = connection.define("pedidos", {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    //CHAVE ESTRANGEIRA
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}); 

export default pedido;