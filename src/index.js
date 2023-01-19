const express = require('express')

const routes=require('./routes')
const app = express()
const config = require('./config/indexConfig')


const setupViewEngine = require('./config/viewEngine')
setupViewEngine(app)

app.use(express.static('src/static'))//css
app.use(routes)



app.listen(config.PORT,()=>console.log(`Server is running on port ${config.PORT}`))