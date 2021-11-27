// Los estilos de este componente se pueden modificar en el archivo _card.scss
import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
// Exportamos nuestra funcion CustomCard que recibe las props de la informacion que se
// desea renderizar
export const CustomCard = (props) => {
    // Con esta funcion accedemos al id de cada pokemon y hacemos un get a su respectiva
    // url con axios para poder obtener la informacion que vamos a mostrar en nuestro modal
    const getId = () => {
        //Accedemos al ID
        const idPokemon = props.id
        //Usamos Axios para hacer el get de cada pokemon
        var config = {
            method: 'get',
            // Usamos el id especifico de cada pokemon
            url: `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`,
            headers: { }
          };
          
          axios(config)
          // Recibimos la informacion de cada pokemon
          .then(function (response) {
              // la guardamos en la constante data 
            const data = response.data
            //Utilizamos un alert de Sweet Alert para mostrar la informacion de cada pokemon
            Swal.fire({
                //Aca va la informacion que deseamos mostrar
                title: data.name,
                imageUrl: data.sprites.front_default,
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'Pokemon image',
                text: `Peso: ${data.weight}`,
                confirmButtonText: 'Cool'
              })
          })

          //Si hay algun error los pintamos en consola
          .catch(function (error) {
            console.log(error);
          });
    }
    // retornamos lo que va a ser visualizado en pantalla
    // y accedemos a las props que nos enviara el componente getPokemos
    // este componente esta diseÑado para ser dinamico
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
