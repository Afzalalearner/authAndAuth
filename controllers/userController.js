
const logger = require('../utils/appLogging');
const userRepository=require('./../repositories/userRepository')

function userAlreadyExists(err){
    return err && err.message && err.message.indexOf('duplicate key')>-1
}

const signup=async (req,res)=>{
    try{

        const data=req.body;
        data.createdDate=new Date();
        
        await userRepository.create(data)
        res.status(200)
        res.send('User Created')
    }catch(err){
        logger.error(err)
        if(userAlreadyExists(err)){
            res.status(400)
            res.send('User Already Exists')
        }else{
         res.status(500)
        res.send('Internal Server Error')
    }

}
}
module.exports={
    signup,
}