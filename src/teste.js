/* const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user: 'laviny',
    password: '12345',
    database: 'atividade'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/get', (req, res) =>{
    const sqlSelect = "SELECT * FROM estacoes";
    db.query(sqlSelect, (err, results) =>{
        res.send(results);
    });

});
app.post("/api/insert", (req, res) =>{

    const serial = req.body.serial;
    const lat = req.body.lat;
    const lon = req.body.lon;
    const nome = req.body.nome;

    const sqlInsert = "INSERT INTO estacoes (serial, lat, lon, nome) VALUES (?,?,?,?)";
    db.query(sqlInsert, [serial, lat, lon, nome], (err, results) =>{
            console.log(results);
    });
});


/* app.delete('/api/delete', (req)) */

/* app.listen(3001, () => {
    console.log("Sevidor rodando na porta 3001");
});
 */ 