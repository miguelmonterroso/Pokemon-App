import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { CustomCard } from './card';

export const Api = () => {
//  SE DECLARA EL ESTADO PARA QUE RECIBA LA INFORMACION DEL API
    const [info, setInfo] = useState({
        title:'',
        img:'',
        peso:'',
        tipo:[]
    })
    useEffect(() => {
      //SE HACE LA CONSULTA AL API PARA OBTENER LA INFORMACION
      // DEL POKEMON.
        var config = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon/3',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            const resp = response.data
            const image = resp.sprites
            const getTypes = resp.types
            const types = []
            for (let i = 0; i < getTypes.length; i++) {
                const elements = getTypes[i].type.name;
                types.push(elements)
            }
            setInfo({
                title: resp.name,
                img: image.front_default,
                peso: resp.weight,
                tipo:types
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [])

    return (
            <CustomCard 
            title={info.title} 
            peso={info.peso} 
            img={info.img} 
            tipo={info.tipo}
            />
    )
}
