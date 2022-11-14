const bunyan=require('bunyan')
const path = require('path')

const logger=bunyan.createLogger({
    name:'API',
    streams:[
        {path:path.join(__dirname,'..','logs','error.log'),level:"error"},
        {path:path.join(__dirname,'..','logs','app.log'),level:"info"},
        {stream:process.stdout}

    ]
})

module.exports=logger;
