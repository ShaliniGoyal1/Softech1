
const express=require('express')
const database = require('./database/db');
const st=require('./index2')
const su=require('./index')
const app=express();
app.use(express.json())

app.get('/getdata',async(req,res) =>{
    const db=await database.main();
    const collection=db.collection('theaters');
    const findResult = await collection.find({}).toArray();
    res.send({
        status: 200,
        message: findResult
    })
})
app.get('/getlist',(req,res)=>{
    res.send({
        
        status: 500,
        data:st.list
    })
})

app.get('/getdetails',(req,res)=> {
    const result= su.sum(10,20);
    const result2=su.minus(40,10);
    res.send({status:200,data:result,message:result2});
});
app.post('/insertData',async(req,res) => {
    try {
       
        const db = await database.main();
        const collection = db.collection('studentlist');
        let result = await collection.insertOne(req.body);
       console.log(result)
        res.send({
            status: 200,
            message: "record inserted successfully",
            data:result
        })
    }
    catch (err) {
        res.send({
            message: "something went wrong , please try again later" + err,
            status: 500
        })
    }

});
app.delete('/deleteData',async(req,res)=>{
    try{
        const db = await database.main();
        const collection = db.collection('studentlist');
        const result = await collection.deleteOne({Name:req.query.Name});
        console.log(result);
       if(result.deletedCount>0)
       {
        res.send({
            message: "",
            status: 200,
            data:"record deleted successfully"
        })
       }
       else{
        res.send({
            message: " please try again later",
           
            
        })
       }
       
    }
    catch (err) {
        res.send({
            message: "something went wrong ,please try again later" + err,
            status: 500
        })
    }
})
app.put('/updateData',async(req,res)=>{
    try{
        const db = await database.main();
        const collection = db.collection('users');
        var newvalues = { $set: req.body};
        const Result = await collection.updateOne({name:req.query.name},newvalues);
        console.log(Result);
       if(Result.modifiedCount>0)
       {
        res.send({
            message: "",
            status: 200,
            data:"record updated successfully"
        })
       }
       else{
        res.send({
            message: " please try again later",
           
            
        })
       }
       
    }
    catch (err) {
        res.send({
            message: "something went wrong ,please try again later" + err,
            status: 500
        })
    }
   
})


app.listen(3000,() => {
    console.log("Server started on the port 3000")
});  