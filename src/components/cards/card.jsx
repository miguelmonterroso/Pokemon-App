// Los estilos de este componente se pueden modificar en el archivo _card.scss
import React from 'react'

// Exportamos nuestra funcion CustomCard que recibe las props de la informacion que se
// desea renderizar
export const CustomCard = (props) => {
    // retornamos lo que va a ser visualizado en pantalla
    // y accedemos a las props que nos enviara el componente getPokemos
    // este componente esta diseÑado para ser dinamico
    return (
        <div className='cardContainer'>
            <div className='center'>
                <h2>{props.name}</h2>
                <img src={props.image} alt="pokeImage" />
                <div className='btns'>
                <button className='btn'>Más info</button>
                <button className='fav'>💘</button>
                </div>
            </div>  
        </div>
    )
}
