import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Estação Metereológica</h1>
      <p>Cadastre a estação </p>
      <div className="form">
        <label>Serial</label>
        <input type="text" name="serial"/>

        <label>Latitude</label>
        <input type="text" name="lat"/>

        <label>Longitude</label>
        <input type="text" name="lon"/>

        <label>Nome</label>
        <input type="text" name="nome"/>
        
        <button type="submit">Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
