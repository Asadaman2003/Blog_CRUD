const {sequelize} = require('../config/db');
const {DataTypes} = require('sequelize');

const comments = sequelize.define('comments',{
    blog_id : {
        type : DataTypes.INTEGER
    },
    user_name : {
      type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING  
    },
    comment : {
      type : DataTypes.TEXT
    },
})
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });


module.exports = comments;