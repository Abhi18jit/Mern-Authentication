require("dotenv").config();
const express = require("express");
const app=express();
const authRouter=require("./router/auth-router");
const contactRouter=require("./router/contact-router");
const serviceRouter=require("./router/service-router");
const adminRouter=require("./router/admin-router");
const connectDb=require("./utils/db")
const errorMiddleware=require("./middlewares/error-middleware");
const cors=require("cors");

const corsOption={
    origin:"http://127.0.0.1:5173",
    method:"GET, POST,PUT,DELETE,PATCH,HEAD",
    credential:"true"
}

app.use(cors(corsOption));
app.use(express.json());   //Middleware of using json

app.use(authRouter);        //Register and Login Router
app.use(contactRouter);        //Contact Router
app.use(serviceRouter);
app.use("/admin",adminRouter);  //admin router

app.use(errorMiddleware);


const PORT=5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    });

})