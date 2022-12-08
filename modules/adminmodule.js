const mongo = require('../connect');
const bcrypt=require("bcrypt");

const { ObjectId } = require('mongodb');
//creating a data
module.exports.createAdmin = async (req,res,next)=>{
    try{
        const randomstring= await bcrypt.genSalt(15);
        req.body.password=await bcrypt.hash(req.body.password,randomstring);
        //save to DataBadse
        const insertedResponse= await mongo.selectedDb.collection("Users").insertOne({...req.body});
        res.status(200).send(insertedResponse);
        next();
    }
    catch(err){
       console.log(err);
       res.status(500).send(err); 
    }
    
     }

     //get data module
module.exports.getAdmin = async (req,res,next) => {
    try{
        const admindata = await mongo.selectedDb.collection("Users").find().toArray();
        res.send(admindata);
    } catch(err) {
     console.error(err);
     res.status(500).send(err)
    }
 }
 
 //update data module
 module.exports.updateAdmin= async (req,res,next)=>{
try{
    const updatedData = await mongo.selectedDb.collection("Users")
    .findOneAndUpdate({_id:ObjectId(req.params.adminId)}, 
                      {$set: {...req.body}}, 
                      {returnDocument : "after"});
                      
res.send(updatedData);
}
catch(err){
    console.log(err);
    res.status(500).send(err);
}

 }
 //delete data module
 module.exports.deleteAdmin = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("Users").remove({_id: ObjectId(req.params.adminId)});
        res.send(deletedData)
    }catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}