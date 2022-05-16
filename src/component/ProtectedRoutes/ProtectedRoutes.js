import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    let userDetails =  JSON.parse(sessionStorage.getItem('userDetails'))
    return userDetails
}

const ProtectedRoutes = () => {
    const isAuth = Auth()
  return   isAuth ? <Outlet/> : <Navigate to='/home'/>
    
}

export default ProtectedRoutes