
const router = require('express').Router()
const Accessory=require('../models/Accessory')

router.get('/create',(req,res)=>{
    res.render('accessory/create')// in folder accessory in file create
})
router.post('/create',async(req,res)=>{// create accessory in mongoDb
    const { name, description, imageUrl } = req.body
    
    await Accessory.create({ name, description, imageUrl })
    res.redirect('/')
} )

module.exports=router