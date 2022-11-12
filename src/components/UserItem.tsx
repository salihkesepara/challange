import {
  ListItem, ListItemAvatar, Avatar, ListItemText, Typography, IconButton
} from '@mui/material'

/* ---------------------------------- icons --------------------------------- */
import ImageIcon from '@mui/icons-material/Image'
import UserItemPropTypes from 'src/dts/userItemPropTypes'
import CollectionsIcon from '@mui/icons-material/Collections'
import { useNavigate } from 'react-router-dom'

const UserItem = (props: UserItemPropTypes) => {
  const { user } = props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/albums/${user.id}`)
  }

  return (
    <ListItem
      data-testid="userListItem"
      secondaryAction={
        <IconButton
          data-testid="userIconButton"
          edge="end"
          size="large"
          aria-label="Gallery"
          onClick={handleClick}>
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
        primary={user.name}
        secondary={
          <>
            <Typography
              data-testid="street"
              component="span"
              variant="body2"
              color="text.primary">
              {user.address.street},
            </Typography>
            <Typography
              data-testid="suite"
              component="span"
              variant="body2"
              color="text.primary">
              {user.address.suite},
            </Typography>
            <Typography
              data-testid="city"
              component="span"
              variant="body2"
              color="text.primary">
              {user.address.city},
            </Typography>
            <Typography
              data-testid="zipcode"
              component="span"
              variant="body2"
              color="text.primary">
              {user.address.zipcode},
            </Typography>
            <Typography
              data-testid="geo"
              component="span"
              variant="body2"
              color="text.primary">
              {user.address.geo.lat} - {user.address.geo.lng}
            </Typography>
          </>
        } />
    </ListItem>
  )
}

export default UserItem
