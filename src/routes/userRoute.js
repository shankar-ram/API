const express =require("express");

//create a router object to handle requests
const router=express.Router();

const userController =require("../controllers/userController");

//get all users; Middleware function that handles GET requests to '/'
router.get("/",userController.getUserList);


//get user by id; Middleware function that handles GET requests to '/:id' (individual user)
router.get("/:id",userController.getUserById);

//create new user;  Middleware function that handles POST requests to '/'
router.post("/",userController.createNewUser);

//update user; Middleware function that handles PUT requests to '/:id'
router.put("/:id", userController.updateUser);

//delete user;  Middleware function that handles DELETE requests to '/:id'
router.delete("/:id",userController.deleteUser);

module.exports=router;
