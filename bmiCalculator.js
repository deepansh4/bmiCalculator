const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({exteded: true})) ;

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var weight1 = Number(req.body.weight);
    var height1 = Number(req.body.height);
    var result = weight1/(height1*height1);

    res.send("Your BMI is "+ result);
})




app.listen(3000, function(){
    console.log("The server has started at port "+ 3000)
})