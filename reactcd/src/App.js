
import './App.css';
import Header from './componentes/header.js';
import ContentOne from './componentes/contentOne';
import Tarjeta from './componentes/Tarjeta';
import MonzalvoLogo from './images/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';
function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <Header></Header>
      <ContentOne></ContentOne>
      <div className='contenedor-principal'>
      <Tarjeta 
      imagen='contrato'
      nombre='Contrato'
      descripcion='Acuerdo de voluntades'
      descriptivo='¿Te imaginas poder firmar contratos a distancia sin necesidad de papel?
      La tecnología ha alcanzado al mundo jurídicoy trae bondades no solo para el medio ambiente por la auencia de papel,
      sino para toda persona ser amparado por los diferentes tipos de contratos que las leyes mexicanas en materia civil 
      estipulan en la legislación vigente'/>
        <br />
      <Tarjeta 
        imagen='law'
        nombre='¿Qué dice la ley sobre los Contratos?'
        descripcion='Código Civil para el Distrito Ferderal'
        descriptivo='¿Te imaginas poder firmar contratos a distancia sin necesidad de papel?
        La tecnología ha alcanzado al mundo jurídicoy trae bondades no solo para el medio ambiente por la auencia de papel,
        sino para toda persona ser amparado por los diferentes tipos de contratos que las leyes mexicanas en materia civil 
        estipulan en la legislación vigente' />


      </div>
      <br />
        <div className="logoContenedor">
          {/*<img 
            className='MonzalvoLogo'
            src={MonzalvoLogo}
            alt='logo de empresa'
  />*/}
          <p><strong>Registra tu visita</strong></p>
          {/*<h1>AQUI VA EL FOOTER DE LA PAGINA</h1>*/}
          </div>
          <div className='contenedor-botones'>
            <Contador numClics={numClics}
            />
            <Boton
            texto='Clic'
            esBotonDeClic={true} 
            manejarClic={manejarClic}/>
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