import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Container } from '@mui/material'

const RootLayouts = () => {
  return (
     <>
     <NavBar />
     <Container sx={{h:5}}>
     <Outlet />
     </Container>
    
     </>
  )
}

export default RootLayouts