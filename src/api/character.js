import api from '@/api/axios'

const characterUrl = '/character'

const getCharacters = () => {
  return api.get(characterUrl).then((response) => response.data.results)
}

export default {
  getCharacters,
}
