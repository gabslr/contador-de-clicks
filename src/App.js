import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Contador from "./components/Contador";
import Boton from "./components/Boton";
import { useState } from "react";


function App() {

  // [valor del estado, funcion para actualizar] =  se inicia en 0
  const [numClics, setNumClics] = useState(0);


  const manejarClic= () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador= () =>{
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
