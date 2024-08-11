import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
const router =createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children: [
    { path: "", element: <Home /> }, { path: "about", element: <About/> },{ path: "contact", element: <Contact /> }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
