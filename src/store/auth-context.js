import React from "react";

const AuthContext=React.createContext({
    token:'',
    loggedIn:false,
    getToken:()=>{},
    logOut:()=>{}
})

export default AuthContext;