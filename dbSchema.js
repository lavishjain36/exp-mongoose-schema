const mongoose=require('mongoose');
const validator=require('validator');

var loanRequeSchema=new mongoose.Schema({
    name:{type:"string",required:true},
    email:{
        type:'string',
        required:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(value);
        }
    },
    mobile:{type:"string",default:"000-000-0000"},
    amount:{type:Number,required:true},
    purpose:{type:'string',default:"Personal Loan"},
    createdAt:{type:Date,default:Date.now}
    
})


var resolutionSchema=new mongoose.Schema({
    name:{type:'string',require:true},
    customerName:{type:'string',require:true},
    customerId:{type:'string',require:true},
    quotedAmount:{type:Number,require:true},
    status:{type:'string',require:true},
    processDuration:{type:Number},
})

var LoanRequest=mongoose.model('leads',loanRequeSchema);
var resolutionRquest=mongoose.model('resolution',resolutionSchema);
module.exports={LoanRequest,resolutionRquest,mongoose}