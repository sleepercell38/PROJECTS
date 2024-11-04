import React, { useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/dashboard/Employeedashboard'
import Admindashboard from './components/dashboard/Admindashboard'
import { getlocalstorage, setLocalStorage } from './utils/Localstorage'
import { useEffect } from 'react'

const App = () => {

     const [user,setuser]=useState()

     const formhandler=(email,password)=>{
        if(email=="employee@gmail.com" && password=="123"){
           setuser("employee")
        }else if( email=="admin@gmail.com" && password=="123"){
          setuser("admin")
        }else{
          alert("invalid credentials!!")
        }
     }

    //  useEffect(()=>{   //  useEffect(()=>{
    //   setLocalStorage();
    //   getlocalstorage();
    //  })
    //   setLocalStorage();
    //   getlocalstorage();
    //  })

  return (
    <div>
       {!user ? <Login formhandler={formhandler}/>:""}
       {user == "admin"? <Admindashboard/> :""}
       {user == "employee"? <Employeedashboard/> :""}
    </div>
  )
}

export default App
