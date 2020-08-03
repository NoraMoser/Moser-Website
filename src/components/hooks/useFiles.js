import { apiUploadFiles, apiCreatePictureObject, apiGetAllPictures, apiCreateVideoObject, apiGetAllVideos, apiCreateQuotes, apiGetQuotes, apiDeleteFile } from "../../utils/api"
import { useState, useEffect, useCallback } from "react"

export default function useFiles() {
    const [pictureData, setPictureData] = useState()
    const [videoData, setVideoData] = useState()
    const [message, setMessage] = useState()
    const [quoteData, setQuoteData] = useState()

    const listQuotes = useCallback(
        () => {
            apiGetQuotes().then(({data}) => setQuoteData(data)).catch(e => setMessage(e))
        }, [setMessage, setQuoteData])

    const listPictures = useCallback(
        () => {
       apiGetAllPictures().then(({data}) => setPictureData(data)).catch(e => setMessage(e))
    }, [setMessage, setPictureData])

    const listVideos = useCallback(
        () => {
       apiGetAllVideos().then(({data}) => setVideoData(data)).catch(e => setMessage(e))
    }, [setMessage, setVideoData])

    const uploadFiles = ({formData}) => {
        apiUploadFiles(formData)
          .then(({ data }) => {
            return data.id
          })
          .catch(message => {
            setMessage(message)
          })
    }

    const createPictures = (pictureObject) => {
        apiCreatePictureObject(pictureObject)
        .then(({data}) => setMessage('success!'))
        .catch(message => setMessage(message))
    }

    const createVideos = (videoObject) => {
        apiCreateVideoObject(videoObject)
        .then(({data}) => setMessage('success!'))
        .catch(message => setMessage(message))
    }

    const createQuotes = (quoteObject) => {
        apiCreateQuotes(quoteObject)
        .then(({data}) => setMessage('success!'))
        .catch(message => setMessage(message))
    }

    const deletePictures = (id) => {
        apiDeleteFile(id)
        .then(({data}) => setMessage('success!'))
        .catch(message => setMessage(message))
    }

    useEffect(() => {
        listQuotes()
        listPictures()
        listVideos()
    }, [listPictures, listVideos, listQuotes])

    return {
        pictureData,
        message,
        uploadFiles,
        createPictures,
        createVideos,
        videoData,
        createQuotes,
        quoteData,
        deletePictures,
        setMessage
      }
}