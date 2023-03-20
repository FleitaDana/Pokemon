import React from 'react'
import { useState, useEffect } from 'react';

const PokemonTable = () => {
  const [personajes, setPersonajes] = useState([])

  const url = "https://pokeapi.co/api/v2/pokemon/"

  
  const getApi = async () => { 
    const response = await fetch(url);  
    const data = await response.json();
    setPersonajes(data.results) 
    
  }
 
  useEffect(() => {
     getApi()
     }, []) 

 
  const mostrar = personajes.map((personaje, index) =>
    <div key={personaje.name + index} style={{ margin: "20px" }}>
      <div style={{ margin: "20px" }}>
        <div>{`Nombre: ${personaje.name}`}
          {/* <img src={personaje.spites} alt={"imagen de personaje"} /> */}
        </div>

      </div>
    </div>
  )
  return (
    <div className='listadoPersonajes'>{mostrar}</div>
  )
}
export default PokemonTable;