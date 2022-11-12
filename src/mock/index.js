import express from 'express'
import cors from 'cors'

import getUsers from './api/getUsers.js'
import getAlbums from './api/getAlbums.js'
import getPhotos from './api/getPhotos.js'

const app = express()
app.use(cors())

const port = 3001

/* ---------------------------------- routes ---------------------------------- */
app.get('/users', getUsers)
app.get('/albums/', getAlbums)
app.get('/photos/', getPhotos)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
