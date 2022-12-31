const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({exteded: true})) ;

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var weight11 = Number(req.body.weight);
    var height11 = Number(req.body.height);
    var result = weight11/(height11*height11);

    res.send("Your BMI is "+ result);
})




app.listen(3000, function(){
    console.log("The server has started at port "+ 3000)
})
