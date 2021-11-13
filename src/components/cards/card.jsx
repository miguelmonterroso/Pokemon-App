import React from 'react'

export const CustomCard = (props) => {
    return (
        <div className='cardContainer'>
            <div className='center'>
                <h2>{props.title}</h2>
                <img src={props.img} alt="pokeImage" />
                <div className='peso'><h4>Peso:</h4><p>{props.peso}</p></div>
                <div className='peso'><h4>Tipo:</h4><p>{props.tipo}</p></div>
            </div>
            
        </div>
    )
}
