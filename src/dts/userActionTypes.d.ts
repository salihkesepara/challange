import UserTypes from 'src/dts/userTypes'
import AlbumTypes from 'src/dts/albumTypes'
import PhotoTypes from 'src/dts/photoTypes'
import { getAlbumsRequestTypes, getPhotosRequestTypes } from 'src/dts/requestTypes'

export default interface UserActionTypes {
  type: string
  params?: getAlbumsRequestTypes | getPhotosRequestTypes
  payload?: UserTypes[]
  | AlbumTypes[]
  | PhotoTypes[]
  | null
  | undefined
  getUsersRequest?: any
  getUsersSuccess?: any
  getUsersFailure?: any

  getAlbumsRequest?: any
  getAlbumSuccess?: any
  getAlbumFailure?: any

  getPhotosRequest?: any
  getPhotosSuccess?: any
  getPhotosFailure?: any
}
