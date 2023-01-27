
const router = require('express').Router()
const Accessory=require('../models/Accessory')
// propuscame accessory
router.get('/create',(req,res)=>{
    res.render('accessory/create')// in folder accessory in file create
})
router.post('/create',async(req,res)=>{// create accessory in mongoDb
    const { name, description, imageUrl } = req.body
    
    await Accessory.create({ name, description, imageUrl })
    res.redirect('/')
})

router.get('/attach',(req,res)=>{
    res.render('accessory/attach')
} )

module.exports=router