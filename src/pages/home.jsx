// Los estilos de este componente se puden modificar en el archivo _home.scss
import React, {useEffect, useState} from 'react'
// Importamos nuestro componente GetPokemos para renderizarlo
import { GetPokemons } from '../components/cards/getPokemos'
import Select from 'react-select'
import axios from 'axios'

var config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118',
    headers: { }
  };

// Exportamos la funcion Homa para poder renderizarla en la app y agregarla a nuestro Router
export const Home = () => {
    const [all, setAll] = useState([])

    const getPoki = () =>{
        axios(config)
        .then(function (response) {
          const data = response.data.results
          data.map(e =>{
            const info = {
                value: e.url, 
                label: e.name
              }
              setAll(list => [...list, info])
              return info
          })
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    useEffect(() => {
        getPoki()
    }, [])

    const getPokemon = (value) => {
      console.log(value.value);
    }

    const CustomSelect = () => (
        <Select 
        options={all}
        onChange={getPokemon}
        className='select'
        />
      )

    // Retornamos nuestro componente para renderizar cuando se ingrese a la url
    return (
        <div className='render'>
          <div className='contSelect'>
            <CustomSelect/>
          </div>
            <GetPokemons/>
        </div>
    )
}
