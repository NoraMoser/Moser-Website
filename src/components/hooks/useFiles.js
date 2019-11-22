import { apiHero, apiUploadFiles, apiCreatePictureObject } from "../../utils/api"
import { useState, useEffect, useCallback } from "react"

export default function useFiles() {
    const [data, setData] = useState()
    const [error, setError] = useState()

    const listHeros = useCallback(
        () => {
       apiHero().then(({data}) => setData(data)).catch(e => setError(e))
    }, [setError, setData])

    const uploadFiles = ({formData}) => {
        apiUploadFiles(formData)
          .then(({ data }) => {
              console.log(data)
            return data.id
          })
          .catch(error => {
            setError(error)
          })
    }

    const createPictures = (title, date, id) => {
        apiCreatePictureObject(title, date, id)
        .then(({data}) => data)
        .catch(error => setError(error))
    }

    useEffect(() => {
        listHeros()
    }, [listHeros])

    return {
        data,
        error,
        uploadFiles,
        createPictures
      }
}