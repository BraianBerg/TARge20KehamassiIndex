const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res) {
    console.log(req.body);
   
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let result = weight/(height*height);
    if(result <= 19){
    res.send(`Sa oled ala kaalus </br> ${weight}:(${height} * ${height})  = ${result}`);
    }
    if (result > 19 && result <= 24.9){
     res.send(`Sa oled normaal kaalus </br> ${weight}:(${height} * ${height})  = ${result}`);   
    }
    if (result >= 25  && result < 30){
        res.send(`Sa oled  ülekaalus </br> ${weight}:(${height} * ${height})  = ${result}`);  
    }
    if (result >= 30){
        res.send(`Sa oled rasvunud </br> ${weight}:(${height} * ${height})  = ${result}`);   
       }

    res.send(`${weight}:(${height} * ${height})  = ${result}`);
 });



app.listen(3000, function(){
    console.log("server is running on port 3000")
});