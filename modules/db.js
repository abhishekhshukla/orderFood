const sequelize=require('sequelize')
const db=new sequelize({
    database:'food',
    username:'root',
    password:'shukl@',
    host:'localhost',
    dialect:'mysql'

})

const users=db.define('users',{

    name:{
        type: sequelize.DataTypes.STRING(40),
        allowNull: false,
    },
    username:{
             type:sequelize.DataTypes.STRING,
             unique:true,
             preimaryKey:true,
             allowNull:false
    }
    ,
    password:{
        type:sequelize.DataTypes.STRING(40),
        allowNull:false
    }


})


module.exports={
    db,
    users
}