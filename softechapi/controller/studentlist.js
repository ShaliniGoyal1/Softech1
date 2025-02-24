const database = require('../database/db')
const getStudentList=async(req,res)=>{
    const db = await database.main();
    const collection = db.collection('studentlist');
    const findResult = await collection.find({}).toArray();
    res.send({
        status: 200,
        message: findResult
    })
}
const insertStudentList=async(req,res)=>{
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

}

    const delStudentList=async(req,res)=>{
         try{
                const db = await database.main();
                const collections = db.collection('studentlist');
                console.log(req.query.name);
                const result = await collections.deleteMany({Name:req.query.name});
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
       
    
    }
    const updateStudentList=async(req,res)=>{
         try{
                const db = await database.main();
                const collection = db.collection('studentlist');
                var newvalues = { $set: req.body};
                const Result = await collection.updateOne({Name:req.query.Name},newvalues);
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
    }

module.exports={getStudentList,insertStudentList,delStudentList,updateStudentList}
