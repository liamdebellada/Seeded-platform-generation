const express = require('express')
const app = express()
const html = require('html')
const fs = require("fs");

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))
app.use(express.json())

app.get("/", function(req, res) {
    res.render("index.html")
})

app.listen(2000)
