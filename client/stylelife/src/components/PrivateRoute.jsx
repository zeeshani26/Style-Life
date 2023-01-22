import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let user =JSON.parse( localStorage.getItem("StyleLifeAdminData"))|| "";
    console.log(user);
    if(user.token){
        return children
    }
    else{
       return <Navigate to={'/'}  />
    }
}

export default PrivateRoute