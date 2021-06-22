import { NavLink as Link} from 'react-router-dom'
import  styled  from 'styled-components'


export const NavLink = styled(Link)`
     color: #808080;
     display: flex;
     align-items: center;
     text-decoration: none;
     padding: 0 1rem;
     height: 100%;
     cursor: pointer;
     &.active {
       color: #ff0000; 
       text-decoration: none;
     }
`;
export const Nav = styled.nav`
 // background-color: red;
background-color: rgba(45, 88, 80, 0.383);
 width: 96%;
  height: 85px;
  margin: .2em auto;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const LoginBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  margin: auto;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
export const LogOutBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff5e62;
  font-weight: 900;
  margin: auto;
  padding: 7px 20px;
  color: #d39d38;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const HomeBtn = styled(Link)`
background-color: rgba(0,0,0,.5);
padding: .8rem;
font-size: 900;
border-radius: 4px;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
text-decoration:none;

  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;


// export default  (NavLink, Nav, LoginBtnLink) 