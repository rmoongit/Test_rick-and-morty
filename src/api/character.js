import api from '@/api/axios'

const characterUrl = '/character'

const getCharactersPage = (pageNumber = 1) => {
  return api
    .get(`${characterUrl}/?page=${pageNumber}`)
    .then((response) => response.data)
}

export default {
  getCharactersPage,
}
