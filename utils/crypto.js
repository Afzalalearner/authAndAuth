const bcrypt=require('bcrypt')

const getHash=(plainText)=>{
    return bcrypt.hash(plainText,1)
}

const verify=(plainText,hash)=>{
    return bcrypt.compare(plainText,hash)
}

module.exports={
    getHash,
    verify,
}