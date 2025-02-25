const express = require('express')

const app = express();
const indexRouter=require('./Router/index')
app.use(express.json())
app.use('/',indexRouter)
app.listen(3000, () => {
    console.log("server started on port 3000")
    //Hello Everyone 
});