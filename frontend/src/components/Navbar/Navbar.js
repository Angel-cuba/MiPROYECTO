import React, {useContext} from 'react'
import { Nav, NavMenu, NavLink, NavBtn, HomeBtn , LoginBtnLink, LogOutBtnLink } from './NavbarElements'
import { AuthContext } from '../lib/auth.context'



const NavBar = () => {
  const authContext = useContext(AuthContext)

     return (
          <>
          <Nav>
            <NavMenu>
                <HomeBtn to='/' activeClassName="activeLink">Home</HomeBtn>

                <NavLink to='/About' activeClassName="activeLink">About</NavLink>
                
                <NavLink to='/Blog' activeClassName="activeLink">Blog</NavLink>
                <NavLink to='/Signup'activeClassName="activeLink">Sign Up</NavLink>
                <NavLink to='/Team'activeClassName="activeLink">Team</NavLink>

              {/* <NavLink to='/Login' activeClassName="activeLink">Login</NavLink> */}
              
              </NavMenu> 

              {!authContext.auth  ? 
              (
                 <NavBtn>
                <LoginBtnLink to='/Login' activeClassName="activeLink">Log In</LoginBtnLink>
              </NavBtn>
              )
               :
                ( 
                  <NavBtn>
                   <LogOutBtnLink to='/' activeClassName="activeLink">Log out</LogOutBtnLink>
                  </NavBtn>
              )
              
              }
             


          </Nav>
      

     </>
     )
}
export default NavBar