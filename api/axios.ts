import axios from 'axios'

import { BASE_URL, API_KEY } from '../constants'

export const api = axios.create({ baseURL: BASE_URL })

const params = {
  apikey: API_KEY,
}

export const getGenres = async () => {
  const response = await api.get('/api/v1/music/genres', { params })
  return response.data
}
