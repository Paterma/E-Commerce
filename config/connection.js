require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

// require('dotenv').config();

// const mysql = mysql2 require('mysql2');

// // const sequelize = process.env.JAWSDB_URL
// //   ? new Sequelize(process.env.JAWSDB_URL)
// //   : new Sequelize(process.env.DB_USER, process.env.DB_PW,process.env.DB_NAME, {
// //       host: 'localhost',
// //       dialect: 'mysql',
// //       dialectOptions: {
// //         decimalNumbers: true,
// //       },
// //     });
//     const sequelize = mysql.createConnection(
//       {
//           host: 'localhost',
//           user: 'root',
//           password: 'root',
//           database: 'ecommerce_db'
//     });

// module.exports = sequelize;

