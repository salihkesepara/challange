/* eslint-disable react/jsx-max-props-per-line */
import { Navigate, Outlet } from 'react-router-dom'

/**
 * This Auth.tsx not necessary for this step. 
 * It added just for example
 * @returns React Component
 */
const Auth = () => {
  // const auth = JSON.parse(localStorage.getItem('auth'))
  const auth = { user: true }
  return (
    auth?.user
      ? <Outlet />
      : <Navigate to="login" replace />
  )
}

export default Auth
