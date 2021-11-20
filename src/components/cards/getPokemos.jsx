// import React, {useEffect, useState} from 'react'
// import axios from 'axios'
// import { CustomCard } from './card'

// export const GetPokemons = () => {
//     const [card, setCard] = useState({
//         id:'',
//         name:'',
//         image:'',
//         weight:'',
//     })

//     useEffect(() => {
//         var config = {
//         method: 'get',
//         url: 'https://pokeapi.co/api/v2/pokemon/',
//         headers: { }
//         };

//         axios(config)
//         .then(async function (response) {
//         const resp = await response.data
//         const names = await resp.results
//         names.map(function (pokemon){
//             var config = {
//                 method: 'get',
//                 url: pokemon.url,
//                 headers: { }
//               };
//               axios(config)
//               .then(async function (response) {
//                   const data = await response.data
//                   const id = await data.id
//                   const name = await data.name
//                   const image = await data.sprites.front_default
//                   const weight = await data.weight
//                   const poki = {
//                     id: id,
//                     name: name,
//                     image: image,
//                     weight: weight
//                   }
//                   setCard(poki)
                  
//                   console.log(card);
//                   return card
//               })
//               .catch(function (error) {
//                 console.log(error);
//               });
//               return true
//         })
//         })
//         .catch(function (error) {
//         console.log(error);
//         });
//     }, [])
//     return (
//         <div>
//         </div>
//     )
// }
