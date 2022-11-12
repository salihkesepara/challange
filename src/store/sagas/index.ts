import { all } from 'redux-saga/effects'
import userSagas from 'src/store/sagas/userSaga'

export default function* rootSaga() {
  yield all([
    ...userSagas
  ])
}
