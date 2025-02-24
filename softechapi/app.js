const express =require('express')
const app=express();

app.get('/getdata',(req,res)=>{
    try{
        res.send({
            "status":200,
            "message":"hello"
        })
    }
    catch(err)
    {
       res.send({
            "status":200,
            "message":"server error"+err
        })
    }
})




app.listen(3000,()=>{
    console.log("server listening on port 3000")
})