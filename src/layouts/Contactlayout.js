 
import { Box, Typography, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StyleLinkButton = styled(NavLink)({
  textDecoration : 'none',
    color : '#fff',
    fontSize: 15,
    "&.active":{
            background:'navy'
    },
    background :'#1876D1',
    padding : 10,
    borderRadius:5
})

const Contactlayout = () => {
  return (
    <>
    <Typography variant='h3'>Contact</Typography>
    <Typography variant='body1' color='grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Typography>
    <Box sx={{display:'flex', alignItems: 'center', justifyContent:'center', my:5,gap:10}}>
        <StyleLinkButton to='Mail'>Mail us</StyleLinkButton>
        <StyleLinkButton to ='Phone'>Call us</StyleLinkButton>
    </Box>
    <Outlet/>

    </>
  )
}

export default Contactlayout