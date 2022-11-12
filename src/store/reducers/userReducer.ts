import { Types } from 'src/store/actions/userActions'
import { STATUS } from 'src/constants'
import UserActionTypes from 'src/dts/userActionTypes'
import UserStateTypes from 'src/dts/userStateTypes'

const initialState: UserStateTypes = {
  users: {
    data: [],
    status: null
  },
  albums: {
    data: [],
    status: null
  },
  photos: {
    data: [],
    status: null
  }
}

export const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    /* ---------------------------------- users --------------------------------- */
    case Types.GET_USERS_REQUEST:
      return {
        ...state,
        users: {
          data: [],
          status: STATUS.PENDING
        }
      }

    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          data: action.payload,
          status: STATUS.SUCCESS
        }
      }
    case Types.GET_USERS_FAILURE:
      return {
        ...state,
        users: {
          data: [],
          status: STATUS.FAILURE
        }
      }

    /* --------------------------------- albums --------------------------------- */
    case Types.GET_ALBUMS_REQUEST:
      return {
        ...state,
        albums: {
          data: [],
          status: STATUS.PENDING
        }
      }

    case Types.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: {
          data: action.payload,
          status: STATUS.SUCCESS
        }
      }
    case Types.GET_ALBUMS_FAILURE:
      return {
        ...state,
        albums: {
          data: [],
          status: STATUS.FAILURE
        }
      }

    /* --------------------------------- photos --------------------------------- */
    case Types.GET_PHOTOS_REQUEST:
      return {
        ...state,
        photos: {
          data: [],
          status: STATUS.PENDING
        }
      }

    case Types.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          data: action.payload,
          status: STATUS.SUCCESS
        }
      }
    case Types.GET_PHOTOS_FAILURE:
      return {
        ...state,
        photos: {
          data: [],
          status: STATUS.FAILURE
        }
      }

    default:
      return state
  }
}
