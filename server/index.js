const express = require('express');
const fs = require('fs');
const app = express();

app.get('/cooking', (req,res)=>{
    fs.readFile('./videos/cooking.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/cooking_img', (req,res)=>{
    fs.readFile('./images/cooking.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/dancing', (req,res)=>{
    fs.readFile('./videos/dancing.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/dancing_img', (req,res)=>{
    fs.readFile('./images/dancing.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});



app.get('/sports', (req,res)=>{
    fs.readFile('./videos/sports.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/sports_img', (req,res)=>{
    fs.readFile('./images/sports.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/exercise', (req,res)=>{
    fs.readFile('./videos/exercise.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/exercise_img', (req,res)=>{
    fs.readFile('./exercise.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/learning', (req,res)=>{
    fs.readFile('./videos/learning.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/learning_img', (req,res)=>{
    fs.readFile('./images/learning.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});


app.get('/driving', (req,res)=>{
    fs.readFile('./videos/driving.mp4', function(err, data){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.write(data);
        res.end();
    });
});

app.get('/driving_img', (req,res)=>{
    fs.readFile('./images/driving.jpg',function(err,data){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(data);
        res.end();
    })
});

app.listen('9000',()=>{
    console.log('Server running');
});