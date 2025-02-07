import { apiUploadFiles, apiCreatePictureObject, apiGetAllPictures, apiCreateVideoObject, apiGetAllVideos, apiCreateQuotes, apiGetQuotes, apiDeleteFile } from "../../utils/api"
import { useState, useEffect, useCallback } from "react"

export default function useFiles() {
    const [pictureData, setPictureData] = useState([])
    const [videoData, setVideoData] = useState([])
    const [quoteData, setQuoteData] = useState([])
    const [message, setMessage] = useState('')

    const listQuotes = useCallback(
        () => {
            apiGetQuotes().then(({data}) => setQuoteData(data)).catch(error => setMessage(error.response?.data?.message || error.message))
        }, [setMessage, setQuoteData])

    const listPictures = useCallback(
        () => {
            apiGetAllPictures().then(({data}) => setPictureData(data)).catch(error => setMessage(error.response?.data?.message || error.message))
        }, [setMessage, setPictureData])

    const listVideos = useCallback(
        () => {
            apiGetAllVideos().then(({data}) => setVideoData(data)).catch(error => setMessage(error.response?.data?.message || error.message))
        }, [setMessage, setVideoData])

    const uploadFiles = ({formData}) => {
        return apiUploadFiles(formData)
            .then(({ data }) => data.id)
            .catch(error => setMessage(error.response?.data?.message || error.message))
    }

    const createPictures = (pictureObject) => {
        apiCreatePictureObject(pictureObject)
        .then(({data}) => setMessage('Success!'))
        .catch(error => setMessage(error.response?.data?.message || error.message))
    }

    const createVideos = (videoObject) => {
        apiCreateVideoObject(videoObject)
        .then(({data}) => setMessage('Success!'))
        .catch(error => setMessage(error.response?.data?.message || error.message))
    }

    const createQuotes = (quoteObject) => {
        apiCreateQuotes(quoteObject)
        .then(({data}) => setMessage('Success!'))
        .catch(error => setMessage(error.response?.data?.message || error.message))
    }

    const deletePictures = (id) => {
        apiDeleteFile(id)
        .then(({data}) => setMessage('Success!'))
        .catch(error => setMessage(error.response?.data?.message || error.message))
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
