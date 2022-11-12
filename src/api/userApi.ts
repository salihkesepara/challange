import axios from 'src/utils/axios'

interface getAlbumParams {
  userId: string
}

interface getPhotosParams {
  albumId: string
}

export const getUsers = () => {
  return axios.get('/users')
}

export const getAlbums = (params: getAlbumParams) => {
  return axios.get(`/albums?userId=${params.userId}`)
}

export const getPhotos = (params: getPhotosParams) => {
  return axios.get(`/photos?albumId=${params.albumId}`)
}
