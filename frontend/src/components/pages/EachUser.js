import React, { useEffect, useContext } from 'react'
import { NewLinks } from '../NewLink'
import { All } from '../../readLinks/All'

import {  useLocation } from 'react-router-dom'

import {AuthContext} from '../lib/auth.context'


 const EachUser = () => {

 const {auth} = useContext(AuthContext)
 const location = useLocation()
 const saludo = location.state

      
useEffect(() => { },[])

     return (
        <>
          <h1>Cada user viene aqui</h1>
            
             <h1>
                {saludo} 
             </h1>
             <h2>{ auth.first_name } { auth.last_name }</h2>
               <NewLinks/>
                <All /> 
                       
          </>
     )
}

export default EachUser