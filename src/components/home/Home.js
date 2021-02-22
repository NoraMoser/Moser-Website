import React, { Fragment, useState } from 'react'
import useInterval from '../hooks/useInterval'
import { makeStyles } from '@material-ui/styles'

const images = ['disney.jpg', 'home.jpg', 'mother.jpg', 'reunited.jpg', 'soccer.jpg', 'mhalloween2019.jpg', 'MoserFamilysd1.jpg', 'MoserFamilysd2.jpg', 'MoserFamilysd3.jpg', 'MoserFamilysd4.jpg', 'MoserFamilysd5.jpg', 'christmasfamily.jpg', 'moserfamchristmas2020.jpg', 'moserfammothersday2020.jpg']

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