const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Inicio', 'ihernandez', 'Olivo_202!!', {
    host: 'expedientescdc.ddns.net',
    port: 45671,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    },
    logging: false
});

module.exports = sequelize;
