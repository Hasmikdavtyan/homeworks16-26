const { Sequelize, DataTypes} = require('sequelize')
let config = require('../config/config.js')

const con = new Sequelize(config.mysql.options)

const Table = con.define('tableArticles1',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },

    title:{
        type:DataTypes.STRING(50),
        allowNull:false
    },

    description:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    content:{
        type: DataTypes.STRING(250),
        allowNull:false

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