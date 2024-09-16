const express=require('express');
const router=express.Router();
const controller=require('./controller')
console.log("kokokok")
router.post('/getData',controller.exampleControllerMethod)
console.log("skskskss123")
module.exports=router;






