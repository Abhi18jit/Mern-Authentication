
// Controllers are logic of routing
const bcrypt=require("bcrypt");

const User = require("../models/user-models");

const home = async (req, res)=>{
    try {
        res.status(200).send("Routing 1");
    } catch (error) {
        res.status(400).send("error occured");
    }
}
const register = async (req, res)=>{
    try {
        // console.log(req.body);
        const data=req.body;
        const {username,email,phone,password} =data;
        const userExisted=await User.findOne({email});             //userExisted is a instance of userSchema i.e it can use all the methods of useSchema
        if(userExisted) {
            return res.status(400).json({message:"user exist"});
        }

        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,saltRound);

        const dataSaved = await User.create({username,email,phone,password});   //dataSaved is a instance of userSchema

        res.status(200).json({
            msg: "User Registered",
            token: await dataSaved.generateToken(),
            userid: dataSaved._id.toString()
        });
    } catch (error) {
        console.log(error);
    }
}

const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email});            //userExist is a instance of userSchema i.e it can use all the methods of useSchema
        if(!userExist){
            return res.status(401).json({message:"Invalid credential"});
        }
        // const isCorrectPassword= await bcrypt.compare(password,userExist.password);
         
        const isCorrectPassword=await userExist.isValidPassword(password);
        
        if(isCorrectPassword){
            res.status(200).json({
                message:"Login Successful",
                token: await userExist.generateToken(),
                userid: userExist._id.toString()

            });
        }else{
            res.status(400).json({message:"invalid username or password"})
            
        }
    } catch (error) {
        res.status(400).json({message:error});
    }

}

const user=async(req,res)=>{
    try {
        const userData=req.data;
        res.status(200).json({userData});
    } catch (error) {
        console.log(`Error is ${error}`);
    }
}

module.exports={home,register,login,user};