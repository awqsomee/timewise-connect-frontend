import axios from 'axios'
import { getJwtToken } from './auth/lib/jwt'
import { TWS } from './consts'

export const API_BASE_URL = `${TWS}/api`

export const $api = axios.create({ baseURL: API_BASE_URL })
export const $authApi = axios.create({ baseURL: API_BASE_URL })

$authApi.interceptors.request.use((config) => {
    const token = getJwtToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})
