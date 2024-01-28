const User=require("../models/user-models")
const Contact=require("../models/contact-models")

const getUserData=async(req,res)=>{
    try {
        const userdata=await User.find({},{password:0});
        if(userdata.length===0){
        res.status(201).send({message:"No Data Found!!!"});

        }
        res.status(201).send({message:userdata});
    } catch (error) {
        res.status(400).send({message:"error in retriving userdata"});
    } 
}
const getSingleUserData=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await User.find({_id:id});
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
    }
}
const updateSingleUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=req.body;
        const updatedData=await User.updateOne({_id:id},{$set:data});
        res.status(201).send(updatedData);
    } catch (error) {
        console.log(error);
    }
}
const deleteUserData=async(req,res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id});
        res.status(201).send({message:"UserDeleted Successfully"});
    } catch (error) {
        console.log(error);
    }
}
const getContactData=async(req,res)=>{
    try {
        const contactdata=await Contact.find({},{password:0});
        if(contactdata.length===0){
        res.status(201).send({message:"No Data Found!!!"});

        }
        res.status(201).send({message:contactdata});
    } catch (error) {
        res.status(400).send({message:"error in retriving contactdata"});
    } 
}
const deleteContactData=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id});
        res.status(201).send({message:"Contact Deleted"});
    } catch (error) {
        res.status(400).send({message:"Error occured"});
        
    }
}

module.exports={getUserData,getContactData,deleteUserData,deleteContactData,getSingleUserData,updateSingleUser};