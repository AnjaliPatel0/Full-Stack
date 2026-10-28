const express = require('express')

//  create server instance
const app = express()

// request server
app.get("/",(req,res) =>{
    res.send("Hello jii")
})

app.get("/about", (req,res) => {
    res.send("About Page")
})

// start server
app.listen(3000)
