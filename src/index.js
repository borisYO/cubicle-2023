const express = require('express')

const routes=require('./routes')
const app = express()
const config = require('./config/indexConfig')
const setupViewEngine = require('./config/viewEngine')
const initDatabase=require('./config/databaseInit')
setupViewEngine(app)

app.use(express.static('src/static'))//css
app.use(express.urlencoded({extended:false})) // za /create -1-
app.use(routes)

// connected mongoose
initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`)))
    .catch((err)=>console.error(err.message))