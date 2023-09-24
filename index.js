import express from "express";
const app = express();



app.get('/',(req, res)=>{
    res.json('Hello World 🐬 hot reload fixed 100% yeees papa')
});




app.listen(process.env.port || 3000);