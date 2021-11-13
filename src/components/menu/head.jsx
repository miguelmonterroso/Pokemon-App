import React from 'react'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Head = () => {
    return (
        <div className='container'>
            <img className='logo' src={logo} alt="logo" />
            <FontAwesomeIcon className='icon' icon={faBars}/>
        </div>
    )
}
