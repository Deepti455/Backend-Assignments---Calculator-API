const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("hello world!");
})
const mod=10000000
const negMod=-10000000
app.get("/add/:num1/:num2",(req,res)=>{
    const num1=Number(req.params.num1);
    const num2=Number(req.params.num2);
    if(num1<negMod || num2<negMod){
        res.send("Underflow");
    }else if(num1>mod || num2>mod){
        res.send("Overflow");
    }else if(isNaN(num1) || isNaN(num2)){
        res.send("Invalid data types");
    }else{
        res.status(200).send(`the sum of given two numbers, sum: ${num1+num2}`);
    }
});

app.post("/sub/:num1/:num2",(req,res)=>{
    const num1=Number(req.params.num1);
    const num2=Number(req.params.num2);
    if(num1<negMod || num2<negMod){
        res.send("Underflow");
    }else if(num1>mod || num2>mod){
        res.send("Overflow");
    }else if(isNaN(num1) || isNaN(num2)){
        res.send("Invalid data types");
    }else{
    res.status(200).send(`the difference of given two numbers, sum: ${num1-num2}`);
    }
});

app.post("/multiply/:num1/:num2",(req,res)=>{
    const num1=Number(req.params.num1);
    const num2=Number(req.params.num2);
    if(num1<negMod || num2<negMod){
        res.send("Underflow");
    }else if(num1>mod || num2>mod){
        res.send("Overflow");
    }else if(isNaN(num1) || isNaN(num2)){
        res.send("Invalid data types");
    }else{
    res.status(200).send(`the product of given numbers, sum: ${num1*num2}`);
    }
});

app.post("/divide/:num1/:num2",(req,res)=>{
    const num1=Number(req.params.num1);
    const num2=Number(req.params.num2);
    if(num1<negMod || num2<negMod){
        res.send("Underflow");
    }else if(num1>mod || num2>mod){
        res.send("Overflow");
    }else if(isNaN(num1) || isNaN(num2)){
        res.send("Invalid data types");
    }else if(num2==0){
        res.status(406).send("Cannot divide by zero");
    }else{
        res.status(200).send(`the division of given numbers, sum: ${num1/num2}`);
    }
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;