import { api } from '../api'

export const useGetData = () => {
  const getFilms = async () => {
    try {
      const response = await api.get(`/films`)
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  }

  const getCharacters = async () => {
    try {
      const response = await api.get(`/characters`)
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  }

  return {
    getFilms,
    getCharacters,
  }
}
