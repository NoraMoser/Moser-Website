import { apiUploadFiles, apiCreatePictureObject, apiGetAllPictures, apiCreateVideoObject, apiGetAllVideos, apiCreateQuotes, apiGetQuotes } from "../../utils/api"
import { useState, useEffect, useCallback } from "react"

export default function useFiles() {
    const [pictureData, setPictureData] = useState()
    const [videoData, setVideoData] = useState()
    const [error, setError] = useState()
    const [quoteData, setQuoteData] = useState()

    const listQuotes = useCallback(
        () => {
            apiGetQuotes().then(({data}) => setQuoteData(data)).catch(e => setError(e))
        }, [setError, setQuoteData])

    const listPictures = useCallback(
        () => {
       apiGetAllPictures().then(({data}) => setPictureData(data)).catch(e => setError(e))
    }, [setError, setPictureData])

    const listVideos = useCallback(
        () => {
       apiGetAllVideos().then(({data}) => setVideoData(data)).catch(e => setError(e))
    }, [setError, setVideoData])

    const uploadFiles = ({formData}) => {
        apiUploadFiles(formData)
          .then(({ data }) => {
            return data.id
          })
          .catch(error => {
            setError(error)
          })
    }

    const createPictures = (pictureObject) => {
        apiCreatePictureObject(pictureObject)
        .then(({data}) => data)
        .catch(error => setError(error))
    }

    const createVideos = (videoObject) => {
        apiCreateVideoObject(videoObject)
        .then(({data}) => data)
        .catch(error => setError(error))
    }

    const createQuotes = (quoteObject) => {
        apiCreateQuotes(quoteObject)
        .then(({data}) => data)
        .catch(error => setError(error))
    }

    useEffect(() => {
        listQuotes()
        listPictures()
        listVideos()
    }, [listPictures, listVideos, listQuotes])

    return {
        pictureData,
        error,
        uploadFiles,
        createPictures,
        createVideos,
        videoData,
        createQuotes,
        quoteData
      }
}