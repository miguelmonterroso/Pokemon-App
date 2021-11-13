import React from 'react'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    root:{
        color:'#1D3557'
    }
})

export const CustomCard = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1>Hello from my card</h1>
        </div>
    )
}
