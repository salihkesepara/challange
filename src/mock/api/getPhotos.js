import photos from '../data/photos.js'

export default function getPhotos(req, res) {
  const { albumId } = req.query
  res.send(photos(albumId))
}
