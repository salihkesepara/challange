import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import AlbumItemPropTypes from 'src/dts/albumItemPropTypes'
import { useNavigate } from 'react-router-dom'

/* ---------------------------------- icons --------------------------------- */
import ImageIcon from '@mui/icons-material/Image'
import CollectionsIcon from '@mui/icons-material/Collections'

const AlbumItem = (props: AlbumItemPropTypes) => {
  const { album } = props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/photos/${album.id}`)
  }

  return (
    <ListItem
      data-testid="listItem"
      secondaryAction={
        <IconButton
          data-testid="iconButton"
          edge="end"
          size="large"
          arial-label="Gallery"
          onClick={handleClick}
        >
          <CollectionsIcon data-testid="collectionIcon" />
        </IconButton>
      }>
      <ListItemAvatar data-testid="listItemAvatar">
        <Avatar data-testid="avatar">
          <ImageIcon data-testid="imageIcon" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        data-testid="listItemText"
        primary={album.title} />
    </ListItem>
  )
}

export default AlbumItem
