const express = require("express");
var dbConn=require("../../config/dbconfig");

//model of our api
var User=function(user){
    this.name=user.name;
    this.id=user.id;
    this.dob=user.dob;
    this.address=user.address;
    this.description=user.description;
    this.createdAt=new Date();
}

//Get all users
User.getAllUsers=(result)=>{
    
    //console.log(typeof(result));
    
    
    //Access the database to fatch all the users
    dbConn.query('SELECT * FROM user',(err,res)=>{
        if(err){
            console.log("Error",err);
            result(null,error);
        }else{
            console.log("Users fetched successfully");
            //console.log(res);
            result(null,res);
        }
    })
}

//get employee by id from database
User.getUserById=(id,result)=>{
    dbConn.query("SELECT * FROM user WHERE id=?",id,(err,res)=>{
        if(err){
            console.log("Error while fetching user by id",err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}

//create new user
User.createUser=(userReqData,result)=>{
    dbConn.query("INSERT INTO user SET ? ",userReqData,(err,res)=>{
        if(err){
            console.log("error while insertion");
            result(null,err);
        }else{
            console.log("User created successfully");
            result(null,res);
        }
    })
}

//update user
User.updateUser=(id,userReqData,result)=>{
    dbConn.query("UPDATE user SET name=? , dob=?, address=?, description=? WHERE id= ?",[userReqData.name,userReqData.dob,userReqData.address,userReqData.description,id],(err,res)=>{
        if(err){
            console.log("Error while updating the employee");
            result(null,err);

        }else{
            console.log("Employee updated successfully");
            result(null,res);
        }
    })
}

//delete employee
User.deleteUser =(id,result)=>{
    dbConn.query("Delete FROM user where id=?",[id],(err,res)=>{
        if(err){
            console.log("Error while deleting user");
            result(null,err);
        }else{
            result(null,res);
        }
    })
}
module.exports= User;