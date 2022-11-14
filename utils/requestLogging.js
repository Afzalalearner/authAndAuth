const morgan = require("morgan")
const fs=require('fs')
const path=require('path')

const logsDir=path.join(__dirname,'..','logs')

if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir)
}

const filepath=path.join(__dirname,'..','logs','request.log')
const fileStream=fs.createWriteStream(filepath,{flags:'a'})

module.exports=fileStream;



