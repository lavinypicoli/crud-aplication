import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
}));

function App() {

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;

const [serial, setSerial] = useState("");
const [lat, setLat] = useState("");
const [lon, setLon] = useState("");
const [nome, setNome] = useState("");

const submit = () =>{
    Axios.post('http://localhost:3001/api/insert', {
      serial: serial,
      lat: lat,
      lon: lon,
      nome: nome,
    }).then(() =>{
      alert("Cadastrado com sucesso!")
    });
};

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
      <CardContent>
      <div>
            <h1>Estação Metereológica</h1>
            <p>Cadastre a estação </p>
            <TextField
                id="outlined-full-width"
                label="Serial"
                name="serial" onChange={(e) =>{setSerial(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="serial"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
                  <TextField
                id="outlined-full-width"
                label="Latitude"
                name="lat" onChange={(e) =>{setLat(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="latitude"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
                  <TextField
                id="outlined-full-width"
                label="Longitude"
                name="lon" onChange={(e) =>{setLon(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="longitude"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
                  <TextField
                id="outlined-full-width"
                label="Nome"
                name="nome" onChange={(e) =>{setNome(e.target.value);}}
                style={{ margin: 20 }}
                placeholder="nome"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default App;
