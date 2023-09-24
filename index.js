import express from "express";
const app = express();



app.get('/',(req, res)=>{
    res.json('Hello World 🐬')
});



app.listen(process.env.port || 3000);