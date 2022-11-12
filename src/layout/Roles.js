/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from 'react-router-dom'
import { ROLES } from 'src/constants'

/**
 * Role based routing is not necessary for this step.
 * I've just added for example
 * 
 * @param allowedRoles
 * @returns Component
 */
const Roles = ({ allowedRoles }) => {
  // const auth = JSON.parse(localStorage.getItem('auth'))

  const auth = {
    token: '1234',
    user: {
      id: '123',
      name: 'salih kesepara',
      roles: [ROLES.EDITOR, ROLES.USER]
    }
  }

  return (
    auth.user.roles?.find((role) => allowedRoles?.includes(role))
      ? <Outlet />
      : <Navigate to="/accessDenied" replace />
  )
}

export default Roles
