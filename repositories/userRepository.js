
const userModel=require('./../models/user.model')

const create=(data)=>{
    const user=new userModel(data)

    return user.save()

}

const getByEmail=(email)=>{
    return userModel.findOne({email:email},{email:1,password:1,role:1})

}


module.exports={
    create,
    getByEmail,
    
}