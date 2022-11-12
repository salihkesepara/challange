import { users } from 'src/dts/userStateTypes'
import UserActionTypes from 'src/dts/userActionTypes'

export default interface HomePropsTypes {
  users?: users
  userActions?: UserActionTypes
}
