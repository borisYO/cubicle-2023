const { Schema,model } = require('mongoose')

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true  
    },
    description: {
        type: String,
        required: true,
        maxLength:50
    },
    imageUrl: {
        type: String,
        required: true,
        // http validation
    },
    difficultyLevel: {
        type: Number,
        require: true,
        max: 5,
        min:1
    }
  
})
const Cube = model('Cube', cubeSchema)
module.exports=Cube
