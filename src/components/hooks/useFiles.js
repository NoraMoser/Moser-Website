import { apiHero, apiUploadFiles, apiCreatePictureObject, apiGetAllPictures, apiCreateVideoObject, apiGetAllVideos } from "../../utils/api"
import { useState, useEffect, useCallback } from "react"

export default function useFiles() {
    const [pictureData, setPictureData] = useState()
    const [videoData, setVideoData] = useState()
    const [error, setError] = useState()

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
              console.log(data)
            return data.id
          })
          .catch(error => {
              console.log(error)
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

    useEffect(() => {
        listPictures()
        listVideos()
    }, [listPictures, listVideos])

    return {
        pictureData,
        error,
        uploadFiles,
        createPictures,
        createVideos,
        videoData
      }
}