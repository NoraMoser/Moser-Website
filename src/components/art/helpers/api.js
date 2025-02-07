import axios from 'axios'

const local = 'http://localhost:8000'
const production = 'https://noral-master.onrender.com'

export const getArtWork = async () => {
    return axios.get(`${production}/api/art/list`)
} 

export const createArtObject = async (object) => {
    return axios.post(`${production}/api/art/create `, object)
}