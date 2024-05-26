import api from '@/api/axios'

const characterUrl = '/episode'

const getEpisode = () => {
  return api.get(`${characterUrl}`).then((response) => response.data)
}

export default {
  getEpisode,
}
