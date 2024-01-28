const {Schema,model}=require("mongoose");

const serviceSchema= new Schema({
    Service:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    },
    Price:{
        type:String,
        require:true
    },
    Provider:{
        type:String,
        require:true
    },
});

const Service=new model("Service",serviceSchema);
module.exports=Service;