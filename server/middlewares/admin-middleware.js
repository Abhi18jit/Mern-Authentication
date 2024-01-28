const adminMiddleware=(req,res,next)=>{
    try {
        const data=req.data;
        console.log(data);
        if(!data.isAdmin){
            return res.status(400).send({message:"Not A Admin"})
        }
        next();
    } catch (error) {
        next(error);
    }
}
module.exports=adminMiddleware;