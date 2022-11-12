import {
  Box,
  Modal
} from '@mui/material'
import { ImagePreviewTypes } from 'src/dts/imagePreviewTypes'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const ImagePreviewer = (props: ImagePreviewTypes) => {
  const {
    open,
    title,
    url,
    onClose = () => { }
  } = props

  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        data-testid="box"
        component="img"
        sx={style}
        alt={title}
        src={url}
      />
    </Modal>
  )
}

export default ImagePreviewer
