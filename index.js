const express = require('express');
const app = express();
const porta=3000;





App.post("/soma/:num1/:num2", (req,res)=>{
    const {num1,num2}= req.params;
const resultado = parseFloat(num1)+parseFloat(num2);
res.json({resultado})});





App.post("/subtração/:num1/:num2", (req,res)=>{
    const {num1,num2}= req.params;
const resultado = parseFloat(num1)-parseFloat(num2);
res.json({resultado})});

App.post("/multiplicação/:num1/:num2", (req,res)=>{
    const {num1,num2}= req.params;
const resultado = parseFloat(num1)*parseFloat(num2);
res.json({resultado})});


App.post("/divisão/:num1/:num2", (req,res)=>{
    const {num1,num2}= req.params;
if(parseFloat(num2)===0){
   // return.res.status(400)
}
res.json({resultado})});
