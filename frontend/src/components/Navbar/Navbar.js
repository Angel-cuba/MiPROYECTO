import React, {useContext} from 'react'
import { Nav, NavMenu, NavLink, NavBtn, HomeBtn , LoginBtnLink, LogOutBtnLink } from './NavbarElements'
import { AuthContext } from '../lib/auth.context'
import { useHistory} from 'react-router-dom'




const NavBar = () => {
  const authContext = useContext(AuthContext)
        const history = useHistory()

      const logout = () => {
   localStorage.clear()
   history.push('/login')
   window.location.reload()
   }



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
                   <LogOutBtnLink to='/' activeClassName="activeLink" onClick={logout}>Log out</LogOutBtnLink>
                  </NavBtn>
              )
              
              }
             


          </Nav>
      

     </>
     )
}
export default NavBar