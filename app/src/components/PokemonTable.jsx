//Componente que no se usa, utilizando fetch

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
    <div key={personaje.name + index} sx={{ margin: "20px" }}>
      <div sx={{ margin: "20px" }}>
        <div>{`Nombre: ${personaje.name}`}
        </div>
      </div>
    </div>
  )
  return (
    <div>{mostrar}</div>
  )
}
export default PokemonTable;