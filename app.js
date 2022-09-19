const express = require("express");
const app = express();
app.get("/",function(request,response){
response.send("</h1>My Todo List</h1>")
});
app.get("/about",function(req,res){
// res.send("<p>I am Anuj Jha. I live in Jamshedpur. All I want is myself to stay happy and I will make sure people around me are happy</p>")
});
app.get("/contact",function(req,res){
    // res.send("<p>contact me at aj03jha@gmail.com</p>")
    });
app.listen(3000,function(){
// console.log("server running");
});