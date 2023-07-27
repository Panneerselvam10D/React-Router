import React from 'react'
import { BrowserRouter,Link ,Route,Routes} from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'

const Component = () => {
  return (
        <BrowserRouter>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Contact'>Contact</Link>
        </nav>
        <Routes>
            <Route index Component={Home}></Route>
            <Route path='About' Component={About} />    
            <Route path='Contact'  Component={Contact} />
        </Routes>
        
        </BrowserRouter>
  )
}

export default Component;