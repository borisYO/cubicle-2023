const db=require('../bd.json')

exports.getHomePage = (req, res) => {
    res.render('index',{cubes:db.cubes})
}
exports.getAboutPage = (req, res) => {
    res.render('about')
}