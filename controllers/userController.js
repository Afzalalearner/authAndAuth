
const logger = require('../utils/appLogging');
const userRepository=require('./../repositories/userRepository')
const crypto=require('./../utils/crypto')

function userAlreadyExists(err){
    return err && err.message && err.message.indexOf('duplicate key')>-1
}

const signup=async (req,res)=>{
    try{

        const data=req.body;
        const hash=await crypto.getHash(data.password);
        data.password=hash;
        data.createdDate=new Date();
        
        await userRepository.create(data)
        res.status(200)
        res.send('User Created')
    }catch(err){
        logger.error(err)
        if(userAlreadyExists(err)){
            res.status(409)
            res.send('User Already Exists')
        }else{
         res.status(500)
        res.send('Internal Server Error')
    }

}
}

const signin=async (req,res)=>{
    const data=req.body;
    const user=await userRepository.getByEmail(data.email)

    if(!user){
        res.status(400)
        res.send('Email ID doesnt exist')
        return;
    }

    const valid=await crypto.verify(data.password,user.password)
    if(valid){

        res.status(200)
        res.send('Success')
    }else{
        res.status(401)
        res.send('Invalid Email or Password')
    }


    
    

}



module.exports={
    signup,
    signin
}
