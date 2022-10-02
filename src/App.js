import './App.css';
import freeCodeCampLogo from './image/freecodecamp-logo.png';
import { Button } from './Button';
import { Contador } from './Contador';
import { useState } from 'react';

function App() {
  //esto es un hook, usando el import creado
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  };
  const reiniciarContador = () => {
    setNumClicks(numClicks*0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de Freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        < Contador 
        numClicks={numClicks} />
        <Button
        txt='click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
        <Button
        txt='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
