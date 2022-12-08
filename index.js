const express = require('express');
const cors =require('cors');
const mongo = require('./connect');
const dotenv = require('dotenv');
const adminrouter=require('./Routers/adminrouter');
const qureyrouter=require('./Routers/qureyrouter');
const register = require('./Routers/registerrouter');
const auth=require('./modules/Authmodule');
//dotenv configuration
dotenv.config();

//express 
const app = express();
app.use(cors());
app.use(express.json());
//monogoDB Connection 
mongo.connect();
app.use('/register',register);
app.use('/',auth.AuthenticateUser);
app.use('/Qurey',qureyrouter);
app.use('/admin',adminrouter);


app.listen(process.env.PORT);