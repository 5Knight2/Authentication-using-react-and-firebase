import AuthContext from "./auth-context";

import React,{useState} from 'react'

const AuthProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
const [token,setToken]=useState(initialToken);
const [loggedIn,setLoggedIn]=useState(false);

const setTokenHandler=(data)=>{
    setToken(data)
    setLoggedIn(true)
    console.log('Setting Token')
    localStorage.setItem('token',token)
}


const logoutHandler=()=>{
     setToken('');
     setLoggedIn(false)
     localStorage.removeItem('token')

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