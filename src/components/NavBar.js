import React from 'react'
import  {AppBar, Box, Container, Toolbar, Typography,styled} from '@mui/material'
import { NavLink } from 'react-router-dom';




const StyledNavLink = styled(NavLink)({
    textDecoration : 'none',
    color : '#fff',
    fontSize: 15,
    "&.active":{
            background:'navy',
            padding : 10,
            borderRadius:5
    }
})

const NavBar = () => {
  return (
    <AppBar position ='static'>
        <Container>
            <Toolbar sx={{display:'flex' , justifyContent:'space-between'}}>
                <Typography varient ='h5'>
                    Router
                </Typography>
                <Box sx={{display:'flex', alignItems:'center', gap:'50px'}}>
                    <StyledNavLink to='/'>Home</StyledNavLink>
                    <StyledNavLink to='About'>About</StyledNavLink>
                    <StyledNavLink to= 'Contact'>Contact</StyledNavLink>
                </Box>
            </Toolbar>
            </Container>
    </AppBar>
  )
}

export default NavBar;