import { getArtWork, createArtObject } from "../helpers/api"
import { useState, useEffect, useCallback } from "react"

export const useArtData = () => {
    const [artData, setArtData] = useState([])
    const [error, setError] = useState()

    const listArt = useCallback(
        () => {
       getArtWork().then(({data}) => setArtData(data)).catch(e => setError(e))
    }, [setError, setArtData])

    useEffect(() => {
            listArt()
        
    }, [listArt])

    const createArt = (artObject) => {
        createArtObject(artObject)
        .then(({data}) => data)
        .catch(error => setError(error))
    }


    return {
        artData,
        error,
        createArt
    }
}