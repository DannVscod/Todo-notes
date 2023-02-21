const sequelize = require('Database');
const sequelize = Database("Database","root", "1234", {
    host:'localhost',
    dialect:'mysql'
})
module.exports = sequelize;