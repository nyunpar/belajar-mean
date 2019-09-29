const express = require('express');

const app = express();

app.use('/api/posts',(req,res,next)=>{
  const posts = [
    {id:'fadfdasfdsa',
     title:"Post dari server 1",
    content: "Ini konten dari server 1" },
    {id:'djfkasdjfkdf',
     title:"Post dari server 2",
    content: "Ini konten dari server 2" }
  ]
  res.status(200).json({
    message:"post berhasil ditarik",
    posts
  });
});
module.exports = app;
