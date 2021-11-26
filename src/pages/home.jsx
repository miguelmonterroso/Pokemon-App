// Los estilos de este componente se puden modificar en el archivo _home.scss
import React from 'react'
// Importamos nuestro componente GetPokemos para renderizarlo
import { GetPokemons } from '../components/cards/getPokemos'

// Exportamos la funcion Homa para poder renderizarla en la app y agregarla a nuestro Router
export const Home = () => {
    // Retornamos nuestro componente para renderizar cuando se ingrese a la url
    return (
        <div className='render'>
            <GetPokemons/>
        </div>
    )
}
