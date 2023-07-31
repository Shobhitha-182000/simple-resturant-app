
const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const order=sequelize.define('order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    details:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=order;