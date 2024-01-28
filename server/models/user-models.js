const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        require: true
    },
    email:{
        type : String,
        require: true
    },
    phone:{
        type : String,
        require: true
    },
    password:{
        type : String,
        require: true
    },
    isAdmin:{
        type : Boolean,
        default:false
    },
});

userSchema.methods.generateToken=async function(){          //don't use fat arrow function here...
    try {
        return jwt.sign(
            {
                userId:this._id.toString(),
                email:this.email,
                isAdmin:this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d"
            }
        );
    } catch (error) {
        console.log(error);
    }
}
userSchema.methods.isValidPassword=async function(password){          //don't use fat arrow function here...
    try {
        return bcrypt.compare(password,this.password);        //here this refers to userExist Instance created at login controller
    } catch (error) {
        console.log(error);
    }
}

userSchema.pre('save', async function(next){     //middleware
    // console.log(this);
    const user =this;
    if(!user.isModified("password")){
        next();
    }

    try {
        const saltRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,saltRound);
        user.password= hash_password;
        // next();

    } catch (error) {
        next(error);
    }
})

const User=new mongoose.model('User',userSchema);

module.exports=User;