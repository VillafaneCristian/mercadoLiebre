const express = require ('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app.listen (3000, ()=>{
    console.log('Servidor ok');
});

app.get('/', function(req,res){
    const indexPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(indexPath);
});

app.get('/login',function(req,res){
    const loginPath = path.resolve(__dirname,'./views/login.html');
    res.sendFile(loginPath);
});

app.get('/register',function(req,res){
    const registerPath = path.resolve(__dirname,'./views/register.html')
    res.sendFile(registerPath);
});