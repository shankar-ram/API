//configuring the database

const mysql =require('mysql');

//create mysql connection 
const dbConn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"api"
})

//connect to the mysql database
dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database Connected successfully");

})

module.exports=dbConn;