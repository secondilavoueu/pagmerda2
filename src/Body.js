import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="App">
      <div className="titulo">
        <h1>Bem-vindo à Página Inicial da nossa AV2</h1>
        </div>  

        <div className="subtitulo">
        <p>Conheça os melhores Cosplays do SESI/SENAI</p>
        </div>

        <div className="img1">
          <img src={require('./FOTO3.jpg')} width={300} /> 
          <h4 className="titulo1"> Povo da Turma da Mônica</h4>
          <p className="subtitulo1"> Mônica, Cascão, Magali e Cebolinha.</p> 

        {/* <img src={require('./FOTO2.jpg')} alt="pessoa2" />
        <img src={require('./FOTO3.jpg')} alt="pessoa3" /> */}
      </div>
    </div>
  );
}

  export default Body;