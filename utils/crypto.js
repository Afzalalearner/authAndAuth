const bcrypt=require('bcrypt')

const getHash=(plainText)=>{
    return bcrypt.hash(plainText,1)
}

module.exports={
    getHash,
}