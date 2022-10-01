import './App.css';
import freeCodeCampLogo from './image/freecodecamp-logo.png';
import { Button } from './Button';

function App() {

  const manejarClick = () =>{
    console.log('Click');
  }
  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de Freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
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
