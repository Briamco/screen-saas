import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import rotuer from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotuer} />
  </StrictMode>,
)
