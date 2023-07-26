import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contactlayout = () => {
  return (
    <>
    <Typography variant='h2'>Contact us</Typography>
    <Typography variant='body1' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Typography>
    <Box>
        <NavLink to='Mail'>Mail us</NavLink>
        <NavLink to ='Phone'>Call us</NavLink>
    </Box>
    <Outlet/>

    </>
  )
}

export default Contactlayout