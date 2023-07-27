import React from 'react'
import NavBar from './components/NavBar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts'
import Home from './screens/Home'
import About from './screens/About'
import Contactlayout from './layouts/Contactlayout'
import Mail from './screens/Mail'
import Phone from './screens/Phone'
import PageNotFound from './screens/PageNotFound'
import Careers, { careerLoader } from './screens/Careers'
import CareersLayout from './layouts/CareersLayout'
import CareersError from './screens/CareersError'
import JobDetail, { JobDetailLoader } from './screens/JobDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<RootLayouts/>}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contactlayout />} >
        <Route path='mail' element ={<Mail />} />
        <Route path='phone' element ={<Phone />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
      <Route path='careers' element={<CareersLayout />}>
        <Route index element ={<Careers />} loader={careerLoader} errorElement={<CareersError/>}/>
        <Route path=':id'element={<JobDetail />} loader={JobDetailLoader} errorElement={<CareersError/>} />
        

      </Route>
      <Route path='*' element={<PageNotFound />}  />
    </Route>
  )
)

const App = () => {
  return (  
     <RouterProvider router={router} />
  ) 
}

export default App

