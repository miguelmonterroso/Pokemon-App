import React from 'react'

export const CustomCard = (props) => {
    return (
        <div className='cardContainer'>
            <div className='center'>
                <h2>{props.name}</h2>
                <img src={props.image} alt="pokeImage" />
                <div className='peso'><h4>Peso:</h4><p>{props.weight}</p></div>
                <button className='btn'>Más info</button>
            </div>  
        </div>
    )
}
