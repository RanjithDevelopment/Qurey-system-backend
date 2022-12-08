const express = require('express');
const { route } = require('./qureyrouter');
const register=require('../modules/registermodule');

const router=express.Router();
router.post('/signup',register.signup);
router.post('/signin',register.sigin);
module.exports=router;