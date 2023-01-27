
const router = require('express').Router()

router.get('/create',(req,res)=>{
    res.render('accessory/create')// in folder accessory in file create
} )

module.exports=router