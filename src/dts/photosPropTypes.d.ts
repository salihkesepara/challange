import { photos } from 'src/dts/userStateTypes'
import UserActionTypes from 'src/dts/userActionTypes'

export default interface PhotosPropTypes {
  photos?: photos
  userActions?: UserActionTypes
}
