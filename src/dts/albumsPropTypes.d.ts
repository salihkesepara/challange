import { albums } from 'src/dts/userStateTypes'
import UserActionTypes from 'src/dts/userActionTypes'

export default interface AlbumsPropsTypes {
  albums?: albums
  userActions?: UserActionTypes
}
