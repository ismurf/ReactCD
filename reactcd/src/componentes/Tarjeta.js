import React from 'react';
import  '../stylesheets/Tarjeta.css';

 function Tarjeta (props){/*exportación nombrada con export antes de la funcion*/
  return(
    <div className='contenedor-tarjeta'>
      <img 
        className='imagen-contrato'
        src={require(`../images/${props.imagen}.png`)}
        alt='foto de contrato'/>
       <div className='contenedor-texto-tarjeta'>
          <p className='nombreTarjeta'><strong>{props.nombre}</strong></p>
          <p className='descripcionTexto'>{props.descripcion}</p>
          <p className='textoDescriptivo'>"{props.descriptivo}"
          </p>
       </div> 
 
    </div>
  )
}

export default Tarjeta; /*exportación por defecto*/