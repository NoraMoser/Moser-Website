import axios from 'axios'

const local = 'http://localhost:8000'

export const apiHero = async () => {
    return axios.get(`${local}/api/hero/list`)
} 

export const apiUploadFiles = async (req) => {
    return axios.post(`${local}/api/file/upload`, req)
}

export const apiGetFileImageUrl = async (id) => {
    return axios.get(`${local}/api/file/${id}`)
}

export const apiCreatePictureObject = async (object) => {
    return axios.post(`${local}/api/picture/create `, object)
}

export const apiGetAllPictures = async () => {
    return axios.get(`${local}/api/picture/list`)
}

export const apiCreateVideoObject = async (object) => {
    return axios.post(`${local}/api/video/create `, object)
}

export const apiGetAllVideos = async () => {
    return axios.get(`${local}/api/video/list`)
}

export const apiCreateQuotes = async (object) => {
    return axios.post(`${local}/api/quote/create`, object)
}

export const apiGetQuotes = async () => {
    return axios.get(`${local}/api/quote/list`)
}

export const apiSignUpNewUser = async (object) => {
    return axios.post(`${local}/api/user/sign-up`, object)
}

export const apiSendEmail = async (email) => {
    return axios.post(`${local}/api/user/verification/email/send/${email}`)
}

export const apiSignIn = async (object) => {
    return axios.post(`${local}/api/user/sign-in`, object)
}