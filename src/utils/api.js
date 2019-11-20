import axios from 'axios'

const local = 'http://localhost:8000'

export const apiHero = async () => {
    return axios.get(`${local}/api/hero/list`)
} 
