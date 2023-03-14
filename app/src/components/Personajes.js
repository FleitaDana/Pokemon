import React from 'react'
import { useState, useEffect } from 'react';

export default function Personajes() {
    const [personajes, setpersonajes] = useState([])


    //explicacion promesas y asincronia --- aca vemos como no nos llega la informacion
    
    // const datos = [{name: "ironman"}, {name:"capitan america"}, {name: "spiderman"}]

    // const mostrarDatos = () => {
    //     setTimeout(() => {
    //         return datos
    //     }, 1500);
    // }
    // console.log(mostrarDatos())



    //FETCH A UNA API EXTERNA --- NOS TRAEMOS LOS DATOS PARA USARLOS EN NUESTRA APP
    const url = "https://pokeapi.co/api/v2/pokemon/"
    
    //const url = "https://rickandmortyapi.com/api/character"


    async function getApi() { //Siempre que usemos un await, debemos decirle a js que esta funcion es asincrona (se ejecuta despues que todo el prograa, es decir cunado recibe la info que espera)
        const response = await fetch(url);  //espera que la url llegue y la guarda en response
        const data = await response.json() //transforma el response en un json para poder leerlo y lo guarda en data
        console.log(response)

        setpersonajes(data.results) //trae el resultado de los perosnajes
        console.log(data.results) //guarda en personajes lo que haya en resultado
      }

    //USAMOS EL HOOK USEEFFECT  
    useEffect(() => {getApi();}, []) //useEffect funcion de reacts que renderiza informacion, en este caso la api
    //recibe la funcion flecha y retorna la funcion getApi de mas arriba

    //MOSTRAMOS EL NOMBRE DE TODOS LOS PERSONAJES EN PANTALLA CON MAP --- LLAMAMOS A LA CONSTANTE(ARRAY) EN EL RETURN
    const mostrar = personajes.map(
      (personaje) =>
    <div style={{margin: "20px"}}>
        <div style={{margin:"20px"}}>{/* asi se pone estilos en linea en react, se los trata como un obj  */}
        <div>{`Nombre: ${personaje.name}`}</div>
        
        </div>
        <div>
        <h2>Imagen</h2>
        <img src={personaje.image} alt={"imagen de personaje"}/>
        </div>
    </div>
     )
  
  return (
    <div className='listadoPersonajes'>{mostrar}</div>
  )
}
