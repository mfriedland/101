const Sequelize = require('sequelize');

const databaseURI = 'postgres://localhost:5432/fame';

module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
    // module.exports = new Sequelize(`postgres://localhost:5432/Senior_Enrichment_Project`, {
    logging: false, // so we don't see all the SQL query made
});