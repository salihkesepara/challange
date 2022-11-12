import { takeEvery, put, fork, call } from 'redux-saga/effects'
import * as userActions from 'src/store/actions/userActions'
import * as api from 'src/api/userApi'
import { toast } from 'react-toastify'
import UserActionTypes from 'src/dts/userActionTypes'

function* getUsers() {
  try {
    const { data } = yield call(api.getUsers)
    yield put(userActions.getUsersSuccess(data))
  } catch (error: any) {
    toast(error.message, { type: toast.TYPE.ERROR })
    yield put(userActions.getUsersFailure())
  }
}

function* getAlbums(action: UserActionTypes) {
  try {
    const { data } = yield call<any>(api.getAlbums, action.params)
    yield put(userActions.getAlbumSuccess(data))
  } catch (error: any) {
    toast(error.message, { type: toast.TYPE.ERROR })
    yield put(userActions.getAlbumFailure())
  }
}

function* getPhotos(action: UserActionTypes) {
  try {
    const { data } = yield call<any>(api.getPhotos, action.params)
    yield put(userActions.getPhotosSuccess(data))
  } catch (error: any) {
    toast(error.message, { type: toast.TYPE.ERROR })
    yield put(userActions.getPhotosFailure())
  }
}

function * watchUsers() {
  yield takeEvery(userActions.Types.GET_USERS_REQUEST, getUsers)
}

function * watchAlbums() {
  yield takeEvery(userActions.Types.GET_ALBUMS_REQUEST, getAlbums)
}

function * watchPhotos() {
  yield takeEvery(userActions.Types.GET_PHOTOS_REQUEST, getPhotos)
}

const userSaga = [
  fork(watchUsers),
  fork(watchAlbums),
  fork(watchPhotos)
]

export default userSaga
