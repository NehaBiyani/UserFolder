const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // or the dialect you are using
  host: 'localhost',
  username: 'root',
  password: 'Pass@123',
  database: 'testdb',
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;