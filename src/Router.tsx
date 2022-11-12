/* eslint-disable react/jsx-max-props-per-line */
import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from 'src/layout/PageNotFound'

// Authentication is not necessary for this step.
import Auth from 'src/layout/Auth'

// Role based route is not necessary for this ste.
import Roles from 'src/layout/Roles'

// views
import Layout from 'src/layout'
import Home from 'src/views/Home'
import { ROLES } from 'src/constants'

// lazy
const Albums = lazy(() => import('src/views/Albums'))
const Photos = lazy(() => import('src/views/Photos'))
const AdminPanel = lazy(() => import('src/views/AdminPanel'))
const EditorPanel = lazy(() => import('src/views/EditorPanel'))
const AccessDenied = lazy(() => import('src/layout/AccessDenied'))

// Pages

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route element={<Layout />}>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/albums/:userId" element={<Albums />} />
            <Route path="/photos/:albumId" element={<Photos />} />

            {/* Role based routes */}
            <Route element={<Roles allowedRoles={[ROLES.ADMIN]} />}>
              {/* only admin can access this rout */}
              <Route path="/admin" element={<AdminPanel />} />
            </Route>
            <Route element={<Roles allowedRoles={[ROLES.EDITOR, ROLES.ADMIN]} />}>
              {/* admin and editor can access this route */}
              <Route path="/editor" element={<EditorPanel />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/accessDenied" element={<AccessDenied />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
