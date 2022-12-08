const express = require('express');

const router=express.Router();

const qureyModule=require('../modules/qureymodule');
const auth=require("../modules/Authmodule");
//to get staff details
router.get('/get',qureyModule.getQurey);
//to create staf
router.post('/create',auth.authorizeStudent,qureyModule.createsQurey);
//to update staf
router.put('/update/:id',qureyModule.updateQurey);
//to delete staf
router.delete('/delete/:id',auth.authorizeStudent,qureyModule.deleteQurey);
module.exports=router;
