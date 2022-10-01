const express = require("express");
const bodyParser = require("body-parser");
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const app = express();
var tasks=["Unit 2 Analog and Digital Electronics","Learning linked list operations","DSA ELab before 27/9/2022"];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

    //setting date
     var today = new Date();
     var daynum = today.getDay();
     var monthnum = today.getMonth();
     var year = today.getFullYear();
     var day = days[daynum];
     var month = months[monthnum];
     var datenum = today.getDate();
     //setting date ends here


     res.render("index",{day:day,month:month,year:year,datenum:datenum,tasks:tasks});
});

app.post("/",function(req,res){
    var task = req.body.new_task;
    tasks.push(task);
    res.redirect("/")
})

app.listen(process.env.PORT||3000,function(){
    console.log("Server running");
});