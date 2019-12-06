import React, { Fragment, useState, useEffect, useCallback } from 'react'
import { Typography } from '@material-ui/core'
import useInterval from '../hooks/useInterval'
import { makeStyles } from '@material-ui/styles'

const images = ['disney.jpg', 'home.jpg', 'mother.jpg', 'reunited.jpg', 'soccer.jpg']

const useStyles = makeStyles(theme => ({
    imageContainer: {
        height: 'calc(100vh)'
    }
}))

function Home() {
    const [intervalIndex, setIntervalIndex] = useState(0)
    const classes = useStyles()
    
        useInterval(function () {
            setIntervalIndex(previousIndex => {
                previousIndex = previousIndex + 1 < images.length ? previousIndex + 1 : 0
                console.log('pi', previousIndex)
                return previousIndex
            })
        }, 3000)

    return(
        <Fragment>
            <img alt="Moser" src={images[intervalIndex]} className={classes.imageContainer}/>
        </Fragment>
    )
}

export default Home