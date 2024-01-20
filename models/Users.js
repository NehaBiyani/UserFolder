const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');
const User = sequelize.define('content_management', {
    id:{
              type:DataTypes.INTEGER,
              primaryKey: true
            },
            title:{
              type:DataTypes.STRING
            },
            playbackUrls:{
              type:DataTypes.STRING
            },
            description:{
              type:DataTypes.STRING
            },
            category_id:{
              type:DataTypes.STRING
            }
  });
  sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
    // You can now start using the User model and perform database operations
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });
  module.exports=User;