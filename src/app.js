const express = require('express');
const path = require('path');
const User = require('./models/models.js');
require('./db/conn.js')
const app = express();
const port = process.env.PORT || '3000'

// for static files
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath)); 


//for templates
const hbs = require("hbs");
const templatepath = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname, '../templates/partials');
app.set("views", templatepath);
hbs.registerPartials(partialspath);


//for bootstrap and jquery
app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")))


// routing
// app.get(path, callback)
app.get("/",(req, res)=>{
    res.render("index")
})
app.use(express.urlencoded({extended:false}))
app.post("/contact", async(req, res)=>{
    try {
        // res.send(req.body)
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        console.log(error)
    }
})


//set view engine
app.set("view engine", "hbs");

//server listening
app.listen(port, ()=>{
    console.log(`server is running at port: http://localhost:${port}`);
})