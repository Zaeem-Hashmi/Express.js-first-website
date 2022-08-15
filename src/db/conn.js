const mongoose = require("mongoose");


//creating DataBase;
mongoose.connect("mongodb://localhost:27017/zaeemportfolio").then(()=>{
    console.log("connection Successfully");
}).catch((error)=>{
    console.log(error);
})