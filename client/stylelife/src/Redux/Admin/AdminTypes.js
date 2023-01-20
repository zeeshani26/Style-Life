import axios from "axios"
import { ADMIN_HEALTH_ERROR, ADMIN_HEALTH_REQUEST, ADMIN_HEALTH_SUCCESS, ADMIN_RESTRO_ERROR, ADMIN_RESTRO_REQUEST, ADMIN_RESTRO_SUCCESS, ADMIN_SPA_ERROR, ADMIN_SPA_REQUEST, ADMIN_SPA_SUCCESS } from "./AdminAction"

export const getAllRestro = () =>(dispatch)=>{
     dispatch({type:ADMIN_RESTRO_REQUEST})
     return axios.get("http://localhost:8080/admin/restro")
     .then(response => dispatch({type:ADMIN_RESTRO_SUCCESS,payload:response.data}))
     .catch(err => dispatch({type:ADMIN_RESTRO_ERROR}))

}

export const getAllSpa = () =>(dispatch)=>{
     dispatch({type:ADMIN_SPA_REQUEST})
     return axios.get("http://localhost:8080/admin/spa")
     .then(response => dispatch({type:ADMIN_SPA_SUCCESS,payload:response.data}))
     .catch(err => dispatch({type:ADMIN_SPA_ERROR}))

}
export const getAllHealth = () =>(dispatch)=>{
     dispatch({type:ADMIN_HEALTH_REQUEST})
     return axios.get("http://localhost:8080/admin/health")
     .then(response => dispatch({type:ADMIN_HEALTH_SUCCESS,payload:response.data}))
     .catch(err => dispatch({type:ADMIN_HEALTH_ERROR}))

}
//return axios.get("https://vintage-attire-deploy.onrender.com/product/men",params)
// .then(response => dispatch({type:MEN_SUCCESS,payload:response.data}))
// .catch(error => dispatch({type:MEN_FAILURE}))