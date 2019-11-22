import React from 'react'
import useFiles from '../hooks/useFiles'
import { Typography } from '@material-ui/core'

function Home() {
    const {data} = useFiles()
    console.log('data', data)
    return(
        <Typography>Home</Typography>
    )
}

export default Home