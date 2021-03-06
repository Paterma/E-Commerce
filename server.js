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
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});