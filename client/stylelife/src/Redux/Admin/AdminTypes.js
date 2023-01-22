import axios from "axios"
import { ADMIN_HEALTH_ADD_ERROR, ADMIN_HEALTH_ADD_REQUEST, ADMIN_HEALTH_ADD_SUCCESS, ADMIN_HEALTH_DEL_ERROR, ADMIN_HEALTH_DEL_REQUEST, ADMIN_HEALTH_DEL_SUCCESS, ADMIN_HEALTH_ERROR, ADMIN_HEALTH_REQUEST, ADMIN_HEALTH_SUCCESS, ADMIN_HEALTH_UPDATE_ERROR, ADMIN_HEALTH_UPDATE_SUCCESS, ADMIN_RESTRO_ADD_ERROR, ADMIN_RESTRO_ADD_REQUEST, ADMIN_RESTRO_ADD_SUCCESS, ADMIN_RESTRO_DEL_ERROR, ADMIN_RESTRO_DEL_REQUEST, ADMIN_RESTRO_DEL_SUCCESS, ADMIN_RESTRO_ERROR, ADMIN_RESTRO_REQUEST, ADMIN_RESTRO_SUCCESS, ADMIN_SPA_ADD_ERROR, ADMIN_SPA_ADD_REQUEST, ADMIN_SPA_ADD_SUCCESS, ADMIN_SPA_DEL_ERROR, ADMIN_SPA_DEL_REQUEST, ADMIN_SPA_DEL_SUCCESS, ADMIN_SPA_ERROR, ADMIN_SPA_REQUEST, ADMIN_SPA_SUCCESS, ADMIN_SPA_UPDATE_ERROR, ADMIN_SPA_UPDATE_SUCCESS, ADMIN_USER_CHANGE_ERROR, ADMIN_USER_CHANGE_REQUEST, ADMIN_USER_CHANGE_SUCCESS, ADMIN_USER_ERROR, ADMIN_USER_REQUEST, ADMIN_USER_SUCCESS } from "./AdminAction"

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
export const getAllUser = () =>(dispatch)=>{
     dispatch({type:ADMIN_USER_REQUEST})
     return axios.get("http://localhost:8080/admin/users")
     .then(response => dispatch({type:ADMIN_USER_SUCCESS,payload:response.data}))
     .catch(err => dispatch({type:ADMIN_USER_ERROR}))

}

export const AddRestro = (data)=>(dispatch)=>{
     dispatch({type:ADMIN_RESTRO_ADD_REQUEST});
     return axios.post(`http://localhost:8080/admin/restro/post`,data)
     .then(res=> dispatch({type:ADMIN_RESTRO_ADD_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_RESTRO_ADD_ERROR }))
}
export const DelRestro = (id)=>(dispatch)=>{
     dispatch({type:ADMIN_RESTRO_DEL_REQUEST});
     return axios.delete(`http://localhost:8080/admin/restro/delete/${id}`)
     .then(res=> dispatch({type:ADMIN_RESTRO_DEL_SUCCESS,payload:res.data}))
     .catch(err=>dispatch({type:ADMIN_RESTRO_DEL_ERROR }))
}

export const UpdateRestro = (data,id)=>(dispatch)=>{
     dispatch({type:ADMIN_RESTRO_DEL_REQUEST});
     return axios.patch(`http://localhost:8080/admin/restro/update/${id}`,data)
     .then(res=> dispatch({type:ADMIN_RESTRO_DEL_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_RESTRO_DEL_ERROR }))
}


export const AddSpa = (data)=>(dispatch)=>{
     dispatch({type:ADMIN_SPA_ADD_REQUEST});
     return axios.post(`http://localhost:8080/admin/spa/post`,data)
     .then(res=> dispatch({type:ADMIN_SPA_ADD_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_SPA_ADD_ERROR }))
}
export const DelSpa = (id)=>(dispatch)=>{
     dispatch({type:ADMIN_SPA_DEL_REQUEST});
     return axios.delete(`http://localhost:8080/admin/spa/delete/${id}`)
     .then(res=> dispatch({type:ADMIN_SPA_DEL_SUCCESS,payload:res.data}))
     .catch(err=>dispatch({type:ADMIN_SPA_DEL_ERROR }))
}

export const UpdateSpa = (data,id)=>(dispatch)=>{
     dispatch({type:ADMIN_SPA_DEL_REQUEST});
     return axios.patch(`http://localhost:8080/admin/spa/update/${id}`,data)
     .then(res=> dispatch({type:ADMIN_SPA_UPDATE_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_SPA_UPDATE_ERROR }))
}

export const AddHealth = (data)=>(dispatch)=>{
     dispatch({type:ADMIN_HEALTH_ADD_REQUEST});
     return axios.post(`http://localhost:8080/admin/health/post`,data)
     .then(res=> dispatch({type:ADMIN_HEALTH_ADD_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_HEALTH_ADD_ERROR }))
}
export const DelHealth = (id)=>(dispatch)=>{
     dispatch({type:ADMIN_HEALTH_DEL_REQUEST});
     return axios.delete(`http://localhost:8080/admin/health/delete/${id}`)
     .then(res=> dispatch({type:ADMIN_HEALTH_DEL_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_HEALTH_DEL_ERROR }))
}

export const UpdateHealth = (data,id)=>(dispatch)=>{
     dispatch({type:ADMIN_HEALTH_DEL_REQUEST});
     return axios.patch(`http://localhost:8080/admin/health/update/${id}`,data)
     .then(res=> dispatch({type:ADMIN_HEALTH_UPDATE_SUCCESS,payload:res.data.alldata}))
     .catch(err=>dispatch({type:ADMIN_HEALTH_UPDATE_ERROR }))
}

export const ChangeType = (id)=>(dispatch)=>{
     dispatch({type:ADMIN_USER_CHANGE_REQUEST});
     return axios.patch(`http://localhost:8080/admin/users/type/${id}`)
     .then(res=>dispatch({type:ADMIN_USER_CHANGE_SUCCESS,payload:res.data.data}))
     .catch(err=> dispatch({type:ADMIN_USER_CHANGE_ERROR}))
}