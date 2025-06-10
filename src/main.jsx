import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthDataProvider from './contexts/AuthDataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthDataProvider>
      <RouterProvider router={router} />
    </AuthDataProvider>
  </StrictMode>,
)
