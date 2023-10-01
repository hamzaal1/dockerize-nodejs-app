import express from "express";
const app = express();
import mysql from 'mysql';

var con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
    database: "nodejs-app"
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});
app.get('/', (req, res) => {
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});




app.listen(process.env.port || 3000);