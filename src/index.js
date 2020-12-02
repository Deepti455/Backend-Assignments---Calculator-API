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
const mod=1000000;
const negMod=-1000000;
app.post("/add",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status: 'error',
            message: "Invalid data types"});
    }else{
        const sum=num1+num2;
        if(sum>mod || num1>mod || num2>mod){
            res.send({
                status: 'error',
                message: "Overflow",
            }); 
        }else if(sum<negMod || num1<negMod || num2<negMod){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
            message: "the sum of given two numbers",
            sum: sum
        });
    }
}
});

app.post("/sub",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status: 'error',
            message: "Invalid data types"});
    }else{
        const sub=num1-num2;
        if(sub>mod || num1>mod || num2>mod){
            res.send({
                status: 'error',
                message: "Overflow",
            }); 
        }else if(sub<negMod || num1<negMod || num2<negMod){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
            message: "the difference of given two numbers",
            difference: sub
        });
    }
}
});

app.post("/multiply",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status: 'error',
            message: "Invalid data types"});
    }else{
        const mul=num1*num2;
        if(mul>mod || num1>mod || num2>mod){
            res.send({
                status: 'error',
                message: "Overflow",
            }); 
        }else if(mul<negMod || num1<negMod || num2<negMod){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
            message: "The product of given numbers",
            result: mul
        });
    }
}
});

app.post("/divide",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(typeof(num1)!="number" || typeof(num2)!="number"){
        res.send({
            status: 'error',
            message: "Invalid data types"});
    }else if(num2==0){
        res.send({
            status: 'error',
            message: "Cannot divide by zero"});
    }else{
        const div=num1/num2;
        if(div>mod || num1>mod || num2>mod){
            res.send({
                status: 'error',
                message: "Overflow",
            }); 
        }else if(div<negMod || num1<negMod || num2<negMod){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
            message: "The division of given numbers",
            result: div
        });
    }
}
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;