const { application } = require('express');
var express = require('express');
const { response, routes } = require('../app');
var router = express.Router();

const {dbName,dbUrl,mongodb,MongoClient} = require('../dbConfig');
const {LoanRequest,resolutionRquest,mongoose}= require('../dbSchema');

mongoose.connect(dbUrl)

router.get('/request',async(req,res)=>{
    try {
        let users=await LoanRequest.find()
        res.send({
            statusCode:200,
            data:users
        })
        
    } catch (error) {
        console.log(error)
        res.send({statusCode:500, message:"Internal Server Error",error})
    }
})


router.post('/request',async(req,res)=>{
    try {
        let users=await LoanRequest.create(req.body)
        res.send({
            statusCode:200,
            data:users
        })
        
    } catch (error) {
        console.log(error)
        res.send({statusCode:500, message:"Internal Server Error",error})
    }
})


router.put('/request/:id',async(req,res)=>{
    try {
        let users=await LoanRequest.find({_id:mongodb.ObjectId(req.params.id)})
        console.log(users)
        users[0].name=req.body.name
        users[0].email=req.body.email
        users[0].mobile=req.body.mobile
        users[0].amount=req.body.amount
        users[0].purpose=req.body.purpose
        await users[0].save()
        res.send({
            statusCode:200,
            message:"Data Updated successfully",
            data:users
        })
    } catch (error) {
        console.log(error)
        res.send({  statusCode:500, message:"Internal Server Error",error})
       
    }
})


router.delete('/request/:id',async(req,res)=>{
    try {
        let users=await LoanRequest.deleteOne({_id:mongodb.ObjectId(req.params.id)})
        res.send({
            statusCode:200,
            message:"Data Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        res.send({
            statusCode:500,
            message:"Internal Server Error",error
        })
    }
})

router.get('/resolution',async(req,res)=>{
try {
    let users=await resolutionRquest.find();
    res.send({
        statusCode:200,
        data:users
    })
    
} catch (error) {
    console.log(error)
    res.send({
        statusCode:500,
        message:"Internal Server Error",error})
}
})


router.post('/resolution',async(req,res)=>{
    try {
        console.log(req.body);
        let users=await resolutionRquest.create(req.body)
        res.send({
            statusCode:200,
            data:users
        })
    } catch (error) {
        console.log(error)
        res.send({statusCode:500, message:"Internal Server Error"})
    }

})
module.exports = router;

