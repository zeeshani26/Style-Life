import { ADMIN_HEALTH_ERROR, ADMIN_HEALTH_REQUEST, ADMIN_HEALTH_SUCCESS, ADMIN_RESTRO_ERROR, ADMIN_RESTRO_REQUEST, ADMIN_RESTRO_SUCCESS, ADMIN_SPA_ERROR, ADMIN_SPA_REQUEST, ADMIN_SPA_SUCCESS } from "./AdminAction"

const initialState = {
    restro:[],
    spa:[],
    health:[],
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
    default: return state
  }
}

export default AdminReducer