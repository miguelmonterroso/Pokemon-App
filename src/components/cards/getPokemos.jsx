import React from 'react'
import axios from 'axios'
import { CustomCard } from './card'
// import { CustomCard } from './card'

export const GetPokemons = () => {
    const [card, setCard] = React.useState([])
    const getAllPokemons = () =>{
        var config = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            const data = response.data.results
            data.map(function(element){
                var config = {
                    method: 'get',
                    url: element.url,
                    headers: { }
                  };
                  
                  axios(config)
                  .then(function (response) {
                    const pokemon = response.data
                    const info = {
                        name: pokemon.name,
                        image: pokemon.sprites.front_default,
                        weight: pokemon.weight
                    }
                    setCard(list => [...list, info])
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                return true
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    React.useEffect(() => {
        getAllPokemons()
    }, [])

    const createCard = card.map((e,i)=>{
        return <CustomCard key={i} name={e.name} image={e.image} weight={e.weight}/>
    })

    return (
        <div className='container-pokemons'>
            <div className='grid'>
                {createCard}
            </div>
            <button className='btn'>Ver otros Pokemons</button>
        </div>
        
    )
}
