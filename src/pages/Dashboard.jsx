//rafce
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'
import { tokenAuthContext } from '../contexts/AuthContextAPI'

const Dashboard = () => {
  const {isAuthorised,setIsAthorised} = useContext(tokenAuthContext)
  const [username,setUsername] = useState("")
  console.log(isAuthorised);
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsAthorised(true)
    }else{
      setIsAthorised(false)
    }
    if(sessionStorage.getItem("user")){
      setUsername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    }else{
      setUsername("")
    }
  },[])
  return (
    <>
    <Header insideDashboard={true}/>
    <div style={{paddingTop:'100px'}} className='container-fluid'>
      <div className="row mt-3">
        <div className="col-lg-8">
          <h1>Welcome <span className='text-warning'>{username},</span></h1>
          <View/>
        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard