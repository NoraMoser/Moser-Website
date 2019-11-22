import axios from 'axios'

const local = 'http://localhost:8000'

export const apiHero = async () => {
    return axios.get(`${local}/api/hero/list`)
} 

export const apiUploadFiles = async (req) => {
    return axios.post(`${local}/api/file/upload`, req)
}

export const apiCreatePictureObject = async (title, date_created, picture_id) => {
    return axios.post(`${local}/api/picture/create `, {title, date_created, picture_id})
}
