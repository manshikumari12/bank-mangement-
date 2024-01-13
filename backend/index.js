const express = require("express")
const app= express()
const {connection} = require("./db")
const {userRouter}=require("./router/user.router")
app.use(express.json())


 app.use("/user",userRouter)



app.listen("2222",async()=>{
    try {
        await connection
        console.log("connected to data-baase");
    } catch (error) {
       console.log(error); 
    }
    console.log(`server is runnning on the port`);
})