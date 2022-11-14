const logger = require('./../utils/appLogging');

const home=(req,res)=>{
    res.status(200)
    res.send('Welcome to Home Page...')
}

const health=(req,res)=>{
    logger.info({message:'Health Checkpoint is Visited'})
    res.status(200)
    res.json({status:'up'})
}

module.exports={
    home,
    health,
}