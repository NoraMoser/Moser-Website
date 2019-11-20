import { apiHero } from "../../utils/api"
import { useState, useEffect, useCallback } from "react"

export default function useFiles() {
    const [data, setData] = useState()
    const [error, setError] = useState()

    const listHeros = useCallback(
        () => {
       apiHero().then(({data}) => setData(data)).catch(e => setError(e))
    }, [setError, setData])

    useEffect(() => {
        listHeros()
    }, [listHeros])

    return {
        data,
        error
      }
}