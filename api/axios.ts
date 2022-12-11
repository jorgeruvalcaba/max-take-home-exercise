import axios from 'axios'

import { BASE_URL, API_KEY } from '../constants'

export const api = axios.create({ baseURL: BASE_URL })

const params = {
  apikey: API_KEY,
  limit: 10,
}

export type Genre = {
  id: number
  parent_id: number
  name: string
}

export const getGenres = async (
  query: string = ''
): Promise<Genre[] | unknown> => {
  try {
    const response = await api.get<Genre[]>(`/api/v1/music/genres?q=${query}`, {
      params,
    })
    return response.data
  } catch (e: unknown) {
    return console.log(e)
  }
}
