function basicAuth(req,res,next){

    if(!req.headers.authorization){
        res.status(401)
        res.send('Unauthorized1')
        return;
    }

    const tokens=req.headers.authorization.split(' ');
    const creds=tokens[1];

    // console.log(creds)
   
    const buff=new Buffer(creds,'base64')
    let decodedcreds=buff.toString('ascii')
   
    // console.log(decodedcreds)

 
    const credTokens=decodedcreds.split(':');

    const [username,password]=credTokens

    if(username==='admin' && password==='password'){
        next();
    }
    else
{

    res.status(401)
    res.send('UnAuthorized2')
}
}

module.exports={
    basicAuth,
}