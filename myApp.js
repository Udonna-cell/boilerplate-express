require("dotenv").config()
let express = require('express');
let app = express();

app.use("/public",express.static(`${__dirname}/public`))
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})
app.get("/now",(req, res, next)=>{
    req.time = new Date().toString()
    next()
},(req, res)=>{
    res.json({
        time: req.time
    })
})
// console.log("Hello World")
app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
    // res.send("Hello Express")
})
app.get("/json",(req, res)=>{
    res.json({
        message: (process.env.MESSAGE_STYLE == "uppercase")? "Hello json".toUpperCase() : "Hello json"
    })
})


































 module.exports = app;
