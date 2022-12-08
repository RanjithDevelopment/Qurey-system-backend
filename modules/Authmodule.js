const jwt = require("jsonwebtoken");

module.exports.AuthenticateUser = async (req,res,next)=>{
try {
//check for token in headers

if(!req.headers.accesstoken)return res.status(400).send({msg:"token not found"});

//validating token
const existUser= jwt.verify(req.headers.accesstoken,process.env.SECRET_KEY);
req.body.currentUser=existUser;

next();
}
catch(err){
    console.log(err);
    return res.status(400).send({msg:"Unathorized"})
}


};

//Admin Authorization
module.exports.authorizeAdmin=(req,res,next)=>{
try{
    if(req.body.currentUser.role==='admin' )next();
    else return res.status(404).send({msg:"you dont have permission to access this api"});

}catch(err){

}
};
//studnet Authorization
module.exports.authorizeStudent=(req,res,next)=>{
    try{
        if(req.body.currentUser.role==='Student' )next();
        else return res.status(404).send({msg:"you dont have permission to access this api"});
    
    }catch(err){
    
    }
    }