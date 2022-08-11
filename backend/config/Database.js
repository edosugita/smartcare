import { Sequelize } from "sequelize";

const db = new Sequelize('smartcare', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;