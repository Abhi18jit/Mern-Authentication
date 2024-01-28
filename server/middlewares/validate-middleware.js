const validate=(schema)=> async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {

        // console.log(err);
        // const message=err.errors[0].message;
        // res.status(400).json({msg:message});

        const status=400;
        const extraDetails=err.errors[0].message;
        const message="Validation Error";
        const error={
            status,
            message,
            extraDetails
        };
        next(error);
    }

}

module.exports=validate;