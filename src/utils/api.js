import axios from 'axios'

const local = 'http://localhost:8000'
const production = 'https://noral-master.onrender.com'

export const apiHero = async () => {
    return axios.get(`${production}/api/hero/list`)
} 

export const apiUploadFiles = async (req) => {
    return axios.post(`${production}/api/file/upload`, req)
}

export const apiGetFileImageUrl = async (id) => {
    return axios.get(`${production}/api/file/${id}`)
}

export const apiCreatePictureObject = async (object) => {
    return axios.post(`${production}/api/picture/create `, object)
}

export const apiGetAllPictures = async () => {
    return axios.get(`${production}/api/picture/list`)
}

export const apiCreateVideoObject = async (object) => {
    return axios.post(`${production}/api/video/create `, object)
}

export const apiGetAllVideos = async () => {
    return axios.get(`${production}/api/video/list`)
}

export const apiCreateQuotes = async (object) => {
    return axios.post(`${production}/api/quote/create`, object)
}

export const apiGetQuotes = async () => {
    return axios.get(`${production}/api/quote/list`)
}

export const apiSignUpNewUser = async (object) => {
    return axios.post(`${production}/api/user/sign-up`, object)
}

export const apiSendEmail = async (email) => {
    return axios.post(`${production}/api/user/verification/email/send/${email}`)
}

export const apiSignIn = async (object) => {
    return axios.post(`${production}/api/user/sign-in`, object)
}

export const apiDeleteFile = async (id) => {
    return axios.delete(`${production}/api/picture/delete/${id}`)
}