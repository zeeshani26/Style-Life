import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    let user = localStorage.getItem("StyleLifeUserData");
    console.log(user);
    if(user){
        return children
    }
    else{
       return navigate("/")
    }
}

export default PrivateRoute