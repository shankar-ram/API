//Entry point of the project

//import express library
const express= require("express"); 

//import mysql library  
const mysql=require("mysql");

//Create express app
const app=express();

//Server port 
const port=process.env.PORT || 5000;

//parsing incoming data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Root route
app.get("/", (req,res)=>{
    res.send("Hello World");
})




//Import user routes
const userRoutes=require('./src/routes/userRoute');

//create user routes
app.use("/api/v1/user",userRoutes);  


//listen to connections on the specified port
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})

