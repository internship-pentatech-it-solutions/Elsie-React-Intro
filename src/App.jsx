import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Shop from './pages/shop'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'shop',
    element: <Shop/>
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'contact',
    element: <Contact/>
  },



 ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
