import React from 'react'
import AppBar from '../common/appbar/Appbar'
import useFiles from '../hooks/useFiles'

function Home() {
    const {data} = useFiles()
    console.log('data', data)
    return(
        <AppBar />
    )
}

export default Home