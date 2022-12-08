const express = require('express');
const router=express.Router();
const adminmodule=require('../modules/adminmodule')
const auth=require("../modules/Authmodule");
router.get('/get',auth.authorizeAdmin,adminmodule.getAdmin);
router.post('/create',auth.authorizeAdmin,adminmodule.createAdmin);
router.put('/update/:adminId',auth.authorizeAdmin,adminmodule.updateAdmin);
router.delete('/delete/:adminId',auth.authorizeAdmin,adminmodule.deleteAdmin);


module.exports=router;