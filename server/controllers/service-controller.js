const Service=require("../models/service-models");

const services=async(req,res)=>{
    try {
        const response=await Service.find();
        if(!response){
            res.status(400).json("Np service found");
        }
        res.status(200).json(response);
    } catch (error) {
        console.log("error",error);
    }
}

module.exports=services;