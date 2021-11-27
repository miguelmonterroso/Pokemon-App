// Los estilos de este componente se pueden modificar en el archivo _card.scss
import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
// Exportamos nuestra funcion CustomCard que recibe las props de la informacion que se
// desea renderizar
export const CustomCard = (props) => {
    // retornamos lo que va a ser visualizado en pantalla
    // y accedemos a las props que nos enviara el componente getPokemos
    // este componente esta diseÑado para ser dinamico
    const getId = () => {
        const idPokemon = props.id
        var config = {
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            const data = response.data
            Swal.fire({
                title: data.name,
                imageUrl: data.sprites.front_default,
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'Pokemon image',
                text: `Peso: ${data.weight}`,
                confirmButtonText: 'Cool'
              })
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div id={props.id} className='cardContainer'>
            <div className='center'>
                <h2>{props.name}</h2>
                <img src={props.image} alt="pokeImage" />
                <div className='btns'>
                <button onClick={getId} className='btn'>Más info</button>
                <button className='fav'>💘</button>
                </div>
            </div>
        </div>
    )
}
