import UserTypes from 'src/dts/userTypes'
import AlbumTypes from 'src/dts/albumTypes'
import photoTypes from 'src/dts/photoTypes'
import { getAlbumsRequestTypes, getPhotosRequestTypes } from 'src/dts/requestTypes'

export const Types = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',

  GET_ALBUMS_REQUEST: 'GET_ALBUMS_REQUEST',
  GET_ALBUMS_SUCCESS: 'GET_ALBUMS_SUCCESS',
  GET_ALBUMS_FAILURE: 'GET_ALBUMS_FAILURE',

  GET_PHOTOS_REQUEST: 'GET_PHOTOS_REQUEST',
  GET_PHOTOS_SUCCESS: 'GET_PHOTOS_SUCCESS',
  GET_PHOTOS_FAILURE: 'GET_PHOTOS_FAILURE'
}

/* -------------------------------- getUsers ------------------------------- */
export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
})

export const getUsersSuccess = (payload: UserTypes[]) => ({
  type: Types.GET_USERS_SUCCESS,
  payload
})

export const getUsersFailure = () => ({
  type: Types.GET_USERS_FAILURE
})

/* -------------------------------- getAlbums ------------------------------- */
export const getAlbumsRequest = (params: getAlbumsRequestTypes) => ({
  type: Types.GET_ALBUMS_REQUEST,
  params
})

export const getAlbumSuccess = (payload: AlbumTypes[]) => ({
  type: Types.GET_ALBUMS_SUCCESS,
  payload
})

export const getAlbumFailure = () => ({
  type: Types.GET_ALBUMS_FAILURE
})

/* -------------------------------- getPhotos ------------------------------- */
export const getPhotosRequest = (params: getPhotosRequestTypes) => ({
  type: Types.GET_PHOTOS_REQUEST,
  params
})

export const getPhotosSuccess = (payload: photoTypes[]) => ({
  type: Types.GET_PHOTOS_SUCCESS,
  payload
})

export const getPhotosFailure = () => ({
  type: Types.GET_PHOTOS_FAILURE
})
