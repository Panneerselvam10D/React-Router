import React from 'react'
import NavBar from './components/NavBar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Contactlayout from './layouts/Contactlayout'
import Mail from './screens/Mail'
import Phone from './screens/Phone'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<RootLayouts/>}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contactlayout />} >
        <Route path='mail' element ={<Mail />} />
        <Route path='Phone' element ={<Phone />} />

      </Route>
    </Route>
  )
)

const App = () => {
  return (  
     <RouterProvider router={router} />
  ) 
}

export default App

