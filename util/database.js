const { Sequelize } = require("sequelize");

const sequelize =new Sequelize('simple-resturant-app','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;