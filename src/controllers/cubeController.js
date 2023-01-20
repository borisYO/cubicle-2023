
const Cube=require('../models/Cube')

exports.getCreateCube = (req, res) => {
    res.render('create')
}

exports.postCreateCube = (req, res) => {
    // console.log(req.body);

    //-save cube
    //-redirect
    const{name,description,imageUrl,difficultyLevel}=req.body
    let cube = new Cube(name, description, imageUrl, difficultyLevel)
    Cube.save(cube)
    res.redirect('/')
}