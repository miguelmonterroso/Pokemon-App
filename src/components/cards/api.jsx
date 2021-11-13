import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { CustomCard } from './card';

export const Api = () => {
    const [info, setInfo] = useState({
        title:'',
        img:'',
        peso:'',
        tipo:[]
    })
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon/2',
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
