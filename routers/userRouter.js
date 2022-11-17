const express=require('express')
const router=express.Router()


const userController=require('./../controllers/userController')


router.get('/',(req,res)=>{
    res.status(200)
    res.send('Coming Soon')
})

router.post('/signup',userController.signup)
router.post('/signin',userController.signin)


module.exports=router;