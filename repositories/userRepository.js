
const userModel=require('./../models/user.model')

const create=(data)=>{
    const user=new userModel(data)

    return user.save()

}

module.exports={
    create,
}