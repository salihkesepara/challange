import UserTypes from 'src/dts/userTypes'
import AlbumTypes from 'src/dts/albumTypes'
import PhotoTypes from 'src/dts/photoTypes'

export interface users {
  data: UserTypes[] | [] | any
  status: string | null | any
}

export interface albums {
  data: AlbumTypes[] | [] | any
  status: string | null | any
}

export interface photos {
  data: PhotoTypes | [] | any
  status: string | [] | any
}

export default interface UserStateTypes {
  users
  albums
  photos
  data?: any
}
