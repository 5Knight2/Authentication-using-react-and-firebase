import AuthContext from "./auth-context";

import React,{useState} from 'react'

const AuthProvider=(props)=>{
const [token,setToken]=useState('');
const [loggedIn,setLoggedIn]=useState(false);

const setTokenHandler=(data)=>{
    setToken(data)
    setLoggedIn(true)
    console.log('Setting Token')
}


const logoutHandler=()=>{
     setToken('');
     setLoggedIn(false)

}

const auth={
    token:token,
    loggedIn:loggedIn,
    getToken:setTokenHandler,
    logOut:logoutHandler
}



return(
    <AuthContext.Provider value={auth}>
{props.children}
    </AuthContext.Provider>
)
}
export default AuthProvider;