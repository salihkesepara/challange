import users from '../data/users.js'

export default function getUsers(req, res) {
  res.send(users())
}
