
const Cube = require('../models/Cube')
const Accessory=require('../models/Accessory')

exports.getCreateCube = (req, res) => {
    res.render('create')
}

exports.postCreateCube =async (req, res) => {
    // console.log(req.body);
    //-save cube
    //-redirect
    const { name, description, imageUrl, difficultyLevel } = req.body
    
    let cube = new Cube({name, description, imageUrl, difficultyLevel})
   await cube.save()
    res.redirect('/')
}
exports.getDetails =async (req, res) => {
const cube=await Cube.findById(req.params.cubeId).lean()
    if (!cube) {
        return res.redirect('/404')
    }
    res.render('details',{cube})
}
exports.getAttachAccessory = async(req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean()
    const accessories =await Accessory.find().lean()
    res.render('cube/attach',{cube,accessories})
} 