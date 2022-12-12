import axios from 'axios'

import { BASE_URL, API_KEY, DEFAULT_ID } from '../constants'
import { Genre, Artist } from './types'

export const api = axios.create({ baseURL: BASE_URL })

const params = {
  apikey: API_KEY,
  // limit: 10,
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

export const getArtistByGenre = async (
  id: number = DEFAULT_ID
): Promise<any | unknown> => {
  if (id === DEFAULT_ID) return

  try {
    const response = await api.get<Artist[]>(
      `/api/v1/music/genres/${id}/artists`,
      {
        params,
      }
    )
    return response.data
  } catch (e: unknown) {
    return console.log(e)
  }
}
