import axios from 'axios'
import { LOCAL_HOST, MOSPOLYTECH } from './consts'
import { getJwtToken } from './auth/lib/jwt'

// export const API_BASE_URL = `${LOCAL_HOST}/api`
export const API_BASE_URL = `${MOSPOLYTECH}/api`

export const $api = axios.create({ baseURL: API_BASE_URL })
export const $authApi = axios.create({ baseURL: API_BASE_URL })

$authApi.interceptors.request.use((config) => {
    const token = getJwtToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})
