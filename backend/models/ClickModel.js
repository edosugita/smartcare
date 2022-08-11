import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Click = db.define('clicks', {
    id_click: DataTypes.STRING,
}, {
    freezeTableName:true
});

export default Click;

(async () => {
    await db.sync();
})();