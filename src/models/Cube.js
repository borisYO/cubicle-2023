const db=require('../bd.json')
const fs = require('fs')
const path=require('path')

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name,
            this.description = description,
            this.imageUrl = imageUrl,
            this.difficultyLevel = difficultyLevel
    }
    static save(cube) {
        cube.id=db.cubes[bd.cubes.length-1].id+1
        db.cubes.push(cube)
        const jsonData=JSON.stringify(db,null,2)
     fs.writeFileSync(path.resolve(__dirname, '../bd.json'),jsonData) 
    }
}
module.exports=Cube