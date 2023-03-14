import React from 'react'
import { Link } from 'react-router-dom' 
//no usamos <a></a> porque una de las ideas principales en react es que no se recargue la pagina y link nos provee eso

export default function NavBar() { //link sirve para que nos redirecion a otra vista sin recargar la pag
  return ( //se usa to en lugar de href en el link
    <nav className='nav'> 
        <Link className='link' to='/'>Navbar</Link> 
        <Link className='link' to='/personajes'>Pokemones</Link> 
    </nav>
  )
}