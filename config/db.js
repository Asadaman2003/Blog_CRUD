const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    'blog',
    'sa',
    'Asad@9922',{
     dialect : 'mssql',
     host : 'localhost'
    }
)
 const connectToDb = async()=>{
    try{
await sequelize.authenticate()
console.log('Database connected');
    }catch(error){
console.log(error);
    }
 }

 module.exports = {sequelize ,connectToDb }