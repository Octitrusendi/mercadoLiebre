const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, ()=>{
        console.log('Servidor corriendo');
});



app.get("/", (req, res) =>{
        res.sendFile(path.resolve('./views/home.html'))
});
app.get("/login", (req, res) =>{
        res.sendFile(path.resolve('./views/login.html'))
});
app.get("/register", (req, res) =>{
        res.sendFile(path.resolve('./views/register.html'))
});