import { ADMIN_HEALTH_ERROR, ADMIN_HEALTH_REQUEST, ADMIN_HEALTH_SUCCESS, ADMIN_RESTRO_ADD_ERROR, ADMIN_RESTRO_ADD_REQUEST, ADMIN_RESTRO_ADD_SUCCESS, ADMIN_RESTRO_DEL_ERROR, ADMIN_RESTRO_DEL_REQUEST, ADMIN_RESTRO_DEL_SUCCESS, ADMIN_RESTRO_ERROR, ADMIN_RESTRO_REQUEST, ADMIN_RESTRO_SUCCESS, ADMIN_RESTRO_UPDATE_ERROR, ADMIN_RESTRO_UPDATE_REQUEST, ADMIN_RESTRO_UPDATE_SUCCESS, ADMIN_SPA_ERROR, ADMIN_SPA_REQUEST, ADMIN_SPA_SUCCESS, ADMIN_USER_ERROR, ADMIN_USER_REQUEST, ADMIN_USER_SUCCESS,
ADMIN_SPA_ADD_ERROR,ADMIN_SPA_ADD_SUCCESS,ADMIN_SPA_ADD_REQUEST,ADMIN_SPA_DEL_ERROR,ADMIN_SPA_DEL_REQUEST,ADMIN_SPA_DEL_SUCCESS,ADMIN_SPA_UPDATE_ERROR,ADMIN_SPA_UPDATE_REQUEST,ADMIN_SPA_UPDATE_SUCCESS, ADMIN_HEALTH_UPDATE_ERROR, ADMIN_HEALTH_UPDATE_SUCCESS, ADMIN_HEALTH_UPDATE_REQUEST, ADMIN_HEALTH_DEL_ERROR, ADMIN_HEALTH_DEL_SUCCESS, ADMIN_HEALTH_DEL_REQUEST, ADMIN_HEALTH_ADD_ERROR, ADMIN_HEALTH_ADD_SUCCESS, ADMIN_HEALTH_ADD_REQUEST, ADMIN_USER_CHANGE_REQUEST, ADMIN_USER_CHANGE_SUCCESS, ADMIN_USER_CHANGE_ERROR } from "./AdminAction"

const initialState = {
    restro:[],
    spa:[],
    health:[],
    user:[],
    isAdmin:false,
    AdminLoading:false,
    AdminError:false,
}


const AdminReducer = (state=initialState,{type,payload}) => {
  switch(type){
    case(ADMIN_RESTRO_REQUEST):{
        return{
          ...state,
            AdminLoading:true,
            AdminError:false,

    }
}
    case(ADMIN_RESTRO_SUCCESS):{
        return {
            ...state,
            restro:payload,
            AdminLoading:false,
            AdminError:false,
        }
    }
    case(ADMIN_RESTRO_ERROR):{
        return{
           ...state,
            AdminLoading:false,
            AdminError:true,
        }
    }
    case(ADMIN_RESTRO_ADD_REQUEST):{
      return{
        ...state,
          AdminLoading:true,
          AdminError:false,

  }
}
  case(ADMIN_RESTRO_ADD_SUCCESS):{
      return {
          ...state,
          restro:payload,
          AdminLoading:false,
          AdminError:false,
      }
  }
  case(ADMIN_RESTRO_ADD_ERROR):{
      return{
         ...state,
          AdminLoading:false,
          AdminError:true,
      }
  }
  case(ADMIN_RESTRO_DEL_REQUEST):{
    return{
      ...state,
        AdminLoading:true,
        AdminError:false,

}
}
case(ADMIN_RESTRO_DEL_SUCCESS):{
    return {
        ...state,
        restro:payload,
        AdminLoading:false,
        AdminError:false,
    }
}
case(ADMIN_RESTRO_DEL_ERROR):{
    return{
       ...state,
        AdminLoading:false,
        AdminError:true,
    }
}
case(ADMIN_RESTRO_UPDATE_REQUEST):{
  return{
    ...state,
      AdminLoading:true,
      AdminError:false,

}
}
case(ADMIN_RESTRO_UPDATE_SUCCESS):{
  return {
      ...state,
      restro:payload,
      AdminLoading:false,
      AdminError:false,
  }
}
case(ADMIN_RESTRO_UPDATE_ERROR):{
  return{
     ...state,
      AdminLoading:false,
      AdminError:true,
  }
}
    case(ADMIN_SPA_REQUEST):{
      return{
        ...state,
          AdminLoading:true,
          AdminError:false,

  }
}
  case(ADMIN_SPA_SUCCESS):{
      return {
          ...state,
          spa:payload,
          AdminLoading:false,
          AdminError:false,
      }
  }
  case(ADMIN_SPA_ERROR):{
      return{
         ...state,
          AdminLoading:false,
          AdminError:true,
      }
  }
  case(ADMIN_SPA_ADD_REQUEST):{
    return{
      ...state,
        AdminLoading:true,
        AdminError:false,

}
}
case(ADMIN_SPA_ADD_SUCCESS):{
    return {
        ...state,
        spa:payload,
        AdminLoading:false,
        AdminError:false,
    }
}
case(ADMIN_SPA_ADD_ERROR):{
    return{
       ...state,
        AdminLoading:false,
        AdminError:true,
    }
}
case(ADMIN_SPA_DEL_REQUEST):{
  return{
    ...state,
      AdminLoading:true,
      AdminError:false,

}
}
case(ADMIN_SPA_DEL_SUCCESS):{
  return {
      ...state,
      spa:payload,
      AdminLoading:false,
      AdminError:false,
  }
}
case(ADMIN_SPA_DEL_ERROR):{
  return{
     ...state,
      AdminLoading:false,
      AdminError:true,
  }
}
case(ADMIN_SPA_UPDATE_REQUEST):{
return{
  ...state,
    AdminLoading:true,
    AdminError:false,

}
}
case(ADMIN_SPA_UPDATE_SUCCESS):{
return {
    ...state,
    spa:payload,
    AdminLoading:false,
    AdminError:false,
}
}
case(ADMIN_SPA_UPDATE_ERROR):{
return{
   ...state,
    AdminLoading:false,
    AdminError:true,
}
}
  case(ADMIN_HEALTH_REQUEST):{
    return{
      ...state,
        AdminLoading:true,
        AdminError:false,

}
}
case(ADMIN_HEALTH_SUCCESS):{
    return {
        ...state,
        health:payload,
        AdminLoading:false,
        AdminError:false,
    }
}
case(ADMIN_HEALTH_ERROR):{
    return{
       ...state,
        AdminLoading:false,
        AdminError:true,
    }
}
case(ADMIN_HEALTH_ADD_REQUEST):{
  return{
    ...state,
      AdminLoading:true,
      AdminError:false,

}
}
case(ADMIN_HEALTH_ADD_SUCCESS):{
  return {
      ...state,
      health:payload,
      AdminLoading:false,
      AdminError:false,
  }
}
case(ADMIN_HEALTH_ADD_ERROR):{
  return{
     ...state,
      AdminLoading:false,
      AdminError:true,
  }
}
case(ADMIN_HEALTH_DEL_REQUEST):{
return{
  ...state,
    AdminLoading:true,
    AdminError:false,

}
}
case(ADMIN_HEALTH_DEL_SUCCESS):{
return {
    ...state,
    health:payload,
    AdminLoading:false,
    AdminError:false,
}
}
case(ADMIN_HEALTH_DEL_ERROR):{
return{
   ...state,
    AdminLoading:false,
    AdminError:true,
}
}
case(ADMIN_HEALTH_UPDATE_REQUEST):{
return{
...state,
  AdminLoading:true,
  AdminError:false,

}
}
case(ADMIN_HEALTH_UPDATE_SUCCESS):{
return {
  ...state,
  health:payload,
  AdminLoading:false,
  AdminError:false,
}
}
case(ADMIN_HEALTH_UPDATE_ERROR):{
return{
 ...state,
  AdminLoading:false,
  AdminError:true,
}
}
case(ADMIN_USER_REQUEST):{
  return{
    ...state,
      AdminLoading:true,
      AdminError:false,

}
}
case(ADMIN_USER_SUCCESS):{
  return {
      ...state,
      user:payload,
      AdminLoading:false,
      AdminError:false,
  }
}
case(ADMIN_USER_ERROR):{
  return{
     ...state,
      AdminLoading:false,
      AdminError:true,
  }
}
case(ADMIN_USER_CHANGE_REQUEST):{
  return{
    ...state,
      AdminLoading:true,
      AdminError:false,

}
}
case(ADMIN_USER_CHANGE_SUCCESS):{
  return {
      ...state,
      user:payload,
      AdminLoading:false,
      AdminError:false,
  }
}
case(ADMIN_USER_CHANGE_ERROR):{
  return{
     ...state,
      AdminLoading:false,
      AdminError:true,
  }
}

    default: return state
  }
}

export default AdminReducer