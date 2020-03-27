import axios from 'axios'

const local = 'http://localhost:8000'

export const getArtWork = async () => {
    return axios.get(`${local}/api/art/list`)
} 

export const createArtObject = async (object) => {
    return axios.post(`${local}/api/art/create `, object)
}