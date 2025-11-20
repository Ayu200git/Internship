// Connecting mysql database with project without sequelize.

// const mysql = require('mysql2');  

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     database: "node-sql",
//     password: "Ayush@sql28",
// });

// module.exports = pool.promise();

//with sequelize library...

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-sql','root', 'Ayush@sql28',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
