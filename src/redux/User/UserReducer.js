import {REQ_LOGIN_USER,SUCCESS_LOGIN_USER,ERR_LOGIN_USER
,REQ_SIGNUP_USER,SUCCESS_SIGNUP_USER,ERR_SIGNUP_USER} from './userTypes'

const intialeState={
    user:[],
    error:[],
    loading:false
}

const UserReducers=(state=intialeState,action)=>{

    switch(action.type){
        case REQ_SIGNUP_USER:return {
            ...state,loading:true
        }
        case SUCCESS_SIGNUP_USER:return {
            ...state,user:action.payload,loading:false
        }
        case ERR_SIGNUP_USER:return {
            ...state,error:action.payload,loading:false
        }
        case REQ_LOGIN_USER:return {
            ...state,loading:true
        }
        case SUCCESS_LOGIN_USER:return {
             ...state,user:[...state.user,action.payload],loading:false
        }
        case ERR_LOGIN_USER:return {
            ...state,error:action.payload,loading:false
        }
        default : return state
    }
}
export default UserReducers

