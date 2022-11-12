import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'src/store/actions/userActions'
import { useParams } from 'react-router-dom'

/* ----------------------------------- mUI ---------------------------------- */
import { ImageList, ImageListItem } from '@mui/material'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'

/* ----------------------------------- dts ---------------------------------- */
import UserActionTypes from 'src/dts/userActionTypes'
import PhotosPropTypes from 'src/dts/photosPropTypes'
import PhotoTypes from 'src/dts/photoTypes'

import ImagePreviewer from 'src/components/ImagePreview'
import Container from 'src/components/Container'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around'
  }

}))

const Photos = (props: PhotosPropTypes) => {
  const { photos, userActions } = props
  const { albumId } = useParams()
  const classes = useStyles()
  const [preview, setPreview] = useState({
    open: false,
    title: '',
    url: ''
  })

  useEffect(() => {
    const params = { albumId }
    userActions?.getPhotosRequest(params)
  }, [])

  const handleClose = () => {
    setPreview({ ...preview, open: false })
  }

  const handleClick = (photo: PhotoTypes) => {
    setPreview({
      open: true,
      title: photo.title,
      url: photo.url
    })
  }

  return (
    <Container status={photos?.status}>
      <ImagePreviewer
        {...preview}
        onClose={handleClose}
      />
      <div className={classes.root}>
        <ImageList data-testid="imageList">
          <ImageListItem
            data-testid="imageListIte"
            key="subHeader"
            cols={4}
            style={{ height: 'auto' }}>
          </ImageListItem>
          {photos?.data.map((photo: PhotoTypes, key: string) => {
            return (
              <div key={key}
                onClick={() => handleClick(photo)}
                className="image-item">
                <ImageListItem
                  data-testid="imageListItem"
                >
                  <img src={photo.thumbnailUrl}
                    alt={photo.title}
                    loading="lazy" />
                  <ImageListItemBar
                    data-testid="imageListItemBar"
                    title={photo.title}
                  />
                </ImageListItem>
              </div>
            )
          })}
        </ImageList>
      </div>
    </Container>
  )
}

const mapStateToProps = ({ user }: any) => {
  return {
    photos: user?.photos
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userActions: bindActionCreators<UserActionTypes, any>(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
