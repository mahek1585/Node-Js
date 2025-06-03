const express = require("express");
const data = require('./data.json');


console.log({data});

// Creating server application
const app = express();

const PORT = 8000;

app.get('/',function(req,res){
res.send("<h1>Portfolio</h1>")
});

app.get('/get-json-data',function(req,res){
    res.json({
         key : "value update",
     });
 });

 app.get("/students",function(req,res) {
    res.json({
        message: "student list fetched",
        data: data,
    });
});

app.get("/students/:id",function(req,res) {
    const id = Number(req.params.id);
    const student = data.find((student) => student.id === id);
    console.log({student});
    if(!student){
        res.json({
            message: 'No data found on this id : $(id)',
            data: null,
        });
    }else
    res.json({
        message: "student  fetched",
        data: null,
    });
});

app.listen(PORT,()=> console.log("server running on PORT:" + PORT));










