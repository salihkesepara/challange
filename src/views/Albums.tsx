import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'src/store/actions/userActions'
import { useParams } from 'react-router-dom'
import UserActionTypes from 'src/dts/userActionTypes'
import AlbumPropsTypes from 'src/dts/albumsPropTypes'
import { List } from '@mui/material'
import AlbumItem from 'src/components/AlbumItem'
import Container from 'src/components/Container'

/* ----------------------------------- dts ---------------------------------- */
import AlbumTypes from 'src/dts/albumTypes'

const Albums = (props: AlbumPropsTypes) => {
  const { albums, userActions } = props
  const { userId } = useParams()

  useEffect(() => {
    const params = { userId }
    userActions?.getAlbumsRequest(params)
  }, [])

  return (
    <Container status={albums?.status}>
      <List>
        {albums?.data?.map((album: AlbumTypes, key: string) => {
          return (
            <AlbumItem
              key={key}
              album={album}
            />
          )
        })}
      </List>
    </Container>
  )
}

const mapStateToProps = ({ user }: any) => {
  return {
    albums: user?.albums
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userActions: bindActionCreators<UserActionTypes, any>(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
