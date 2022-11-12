import albums from '../data/albums.js'

export default function getAlbums(req, res) {
  const { userId } = req.query
  res.send(albums(userId))
}
