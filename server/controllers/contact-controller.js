const Contact=require("../models/contact-models");


const contact=async (req,res)=>{
    try {
        const response=req.body;
        console.log(response);
        await Contact.create(response);
        res.status(200).json({msg:"Message sent successfully"});        
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

module.exports={contact};
