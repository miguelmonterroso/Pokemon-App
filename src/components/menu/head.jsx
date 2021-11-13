import React from 'react'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Head = () => {
    return (
        <div className='container'>
            <img className='logo' src={logo} alt="logo" />
            <FontAwesomeIcon/>
        </div>
    )
}
