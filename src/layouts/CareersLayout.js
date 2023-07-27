import { Container, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <>
    <Typography variant='h6'>Welcome to our career page...</Typography>
    <Container sx={{p:5}}>
    <Outlet />
    </Container>
    </>
  )
}

export default CareersLayout