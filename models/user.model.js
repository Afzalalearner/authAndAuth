const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{type:String,required:[true,'Email is Mandatory'],unique:true},
    password:{type:String,required:[true,'Password is Mandatory']},
    firstName:{type:String,required:[true,'First name is Mandatory']},
    lastName:{type:String,required:[true,'Last name is Mandatory']},
    role:{type:Number,default:1},
    createdDate:Date,
    updatedDate:{
        type:Date,
        default:Date.now
    }

})

const userModel=mongoose.model('user',userSchema)

module.exports=userModel;