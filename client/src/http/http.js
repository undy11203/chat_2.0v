import axios from 'axios'

export const API_URL = 'http://localhost:5001/api'

const $api = axios.create({
    withCredentails: true,
    baseURL: API_URL
})

export default $api