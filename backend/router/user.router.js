const express = require("express")
userRouter = express.Router()
const {
    userRegistration,
    userLogin,
    userLogout

    
} = require("../controller/user.controller")

userRouter.post("/register", userRegistration);
userRouter.post("/login", userLogin);
userRouter.post("/logout", userLogout);

module.exports={userRouter}