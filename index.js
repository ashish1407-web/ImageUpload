const express=require('express')
const app=express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router=require('./route')
const mongoose=require('mongoose')
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router)
try{
    mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true})
    console.log("MongoDb is connected successfully...")
   } 
catch (error) { 
    console.log(error) 
   }

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on ${process.env.PORT}`)
})