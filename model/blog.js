const {sequelize} = require('../config/db');
const {DataTypes} = require('sequelize');

const BlogPost = sequelize.define('blog',{
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    author : {
      type : DataTypes.STRING,
      allowNull : false
    },
    description : {
      type : DataTypes.TEXT
    },
    content : {
        type : DataTypes.TEXT ,
    },
    category : {
        type : DataTypes.TEXT,
    }
})
sequelize.sync({alter:true})
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });


module.exports = BlogPost;