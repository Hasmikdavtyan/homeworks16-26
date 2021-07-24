const { Sequelize, DataTypes} = require('sequelize')
let config = require('../config/config.js')

const con = new Sequelize(config.mysql.options)

const Table = con.define('myBlogTable',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },

    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },

    lastName:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull:false

    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false,
        isEmail:true
    },
  


},
{ 
    freezeTableName: true,
    charset:'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
    

}
)

module.exports={
    Table
}