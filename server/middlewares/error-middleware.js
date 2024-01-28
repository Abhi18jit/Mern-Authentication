const errorMiddleware=(err,req,res,next)=>{
    const statusCode= err.status || 500;
    const message= err.message || "Backend Error";
    const extraDetails=err.extraDetails || "Error from Backend";
    return res.status(statusCode).json({message,extraDetails});
}

module.exports=errorMiddleware;