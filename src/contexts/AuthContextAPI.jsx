//rafce
import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()

const AuthContextAPI = ({children}) => {
    const [isAuthorised,setIsAthorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAthorised(true)
        }else{
            setIsAthorised(false)
        }
    },[isAuthorised])

  return (
    <tokenAuthContext.Provider value={{isAuthorised,setIsAthorised}}>
        {children}
    </tokenAuthContext.Provider>
  )
}
export default AuthContextAPI