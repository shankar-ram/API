//requiring the model that we will be using to update and access our data
const UserModel=require("../models/userModel");
 

//Exporting functions to handle our CRUD requests

//Get all the users
exports.getUserList =(req,res)=>{
    // console.log("all users");
    UserModel.getAllUsers((err,users)=>{
      
        //console.log(users);
        
        if(err)
        res.send(err);
        console.log('Users',users);
        res.send(users);

    })
}

//get user by id
exports.getUserById=(req,res)=>{
    UserModel.getUserById(req.params.id, (err,user)=>{
        
        //console.log(user);
        if(err)
        res.send(err);
        console.log("Single user data",user);
        res.send(user);
        
    })
}

//create new user 
exports.createNewUser = (req,res)=>{
    
    //create a new user object
    const userReqData=new UserModel(req.body);
    console.log('userReqData',userReqData);
    
    //check null length. If true then send a bad request message
    if(req.body.constructor===Object && Object(req.body).length===0){
        res.send(400).send({success:false,message:'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData,(err,user)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:"User Created Successfully",data:user});
        
        })
    }

}


//update user
exports.updateUser=(req,res)=>{
    
    const userReqData=new UserModel(req.body);
    console.log('userReqData update',userReqData);
    //check null
    if(req.body.constructor===Object && Object(req.body).length===0){
        res.send(400).send({success:false,message:'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id,userReqData,(err,user)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:"User Updated Successfully",data:user});
        
        })
    }
}

//delete user
exports.deleteUser=(req,res)=>{
    UserModel.deleteUser(req.params.id,(err,user)=>{
        if(err)
        res.send(err);
        res.json({success:true,message:'User deleted successfully'});
    })
}

