const express=require('express')
const database = require('../database/db')

const st=require('../index2')
const stnew=require('../controller/studentlist')
const router=express.Router()

router.get('/getdata',stnew.getStudentList);

router.post('/insertData',stnew.insertStudentList);

router.delete('/deleteData',stnew.delStudentList);

router.put('/updateData',stnew.updateStudentList);
   
module.exports=router