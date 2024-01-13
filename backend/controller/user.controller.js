

const bcrypt = require("bcrypt")

const {UserModel} = require("../model/user.model")
const jwt = require("jsonwebtoken")


const userRegistration =async (req,res) =>{
try {
    const {email,name,password } = req.body
    const userexist = await UserModel.findOne({email})

    if(userexist){
        return res.status(400).send({ msg: "User Already Exists. Please Login!!" });
    }


    bcrypt.hash(password,5, async(err,hash)=>{
        const newuser  = UserModel ({email,name,password:hash})
        await newuser.save()
        res.status(200).send({ msg: "Registration Successful" });
    })

} catch (error) {
    res.status(400).send({ msg: "Error Ocurred" });
}
}



const userLogin = async (req,res)=>{

    try {
        const {email,password}=req.body
        console.log(email,password)
         const user = await UserModel.findOne({email})
         if(!user){
            return res.status(400).send({ msg: "User Does not Exist, Kindly Register First!!" });
         }
        //  await bcrypt.compare(password, user.password);

         const passwordmatching =await bcrypt.compare(password,user.password)

         if(!passwordmatching){
            res.status(401).send({msg:"InValid Credentials"})
         }

         const token = jwt.sign({ userId: user._id },"usercode", {
			expiresIn: "2h",
		});

		res.status(200).json({
			msg: "Login Successful",
			token,
		});


    } catch (error) {
       res.status(400).send({msg:"Error Occured"}) 
    }

}
 const userLogout = async (req,res) =>{

 }
module.exports = {
    userRegistration, 
    userLogin,
    userLogout
}