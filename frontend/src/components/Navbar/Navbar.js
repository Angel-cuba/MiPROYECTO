import React from 'react'
import { Nav, NavMenu, NavLink, NavBtn, LoginBtnLink } from './NavbarElements'




const NavBar = () => {

     return (
          <>
          <Nav>
            <NavMenu>
                <NavLink to='/About' activeClassName="activeLink">About</NavLink>
                
                <NavLink to='/Blog' activeClassName="activeLink">Blog</NavLink>
                <NavLink to='/Signup'activeClassName="activeLink">Sign Up</NavLink>
                <NavLink to='/Team'activeClassName="activeLink">Team</NavLink>

              {/* <NavLink to='/Login' activeClassName="activeLink">Login</NavLink> */}
              
              </NavMenu> 
              <NavBtn>
                <LoginBtnLink to='/Login' activeClassName="activeLink">Log In</LoginBtnLink>
              </NavBtn>


          </Nav>
      

     </>
     )
}
export default NavBar