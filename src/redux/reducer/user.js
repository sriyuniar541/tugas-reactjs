//state global dan untuk mengupdate state menggunakan action
const initialState = { 
//sesuai backend login user
    user : {
        id:'',
        email :'',
        fullname :'',
        role : '',
        token :''
    },
    isLoading:false
}


const userReducer = (state=initialState,action) => {
    if (action.type === 'USER_LOGIN_PENDING') {
        return {
            ...state,
            isLoading:true
        } 
    } else if(action.type === 'USER_LOGIN_SUCCESS') {
        return {
            ...state,
            user:action.payload,
            isLoading : false
        }
    } else {
        return state
    }
}

export default userReducer;