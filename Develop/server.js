const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection
// Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// Hint: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!
// After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.



