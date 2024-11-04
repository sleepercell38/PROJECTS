import React from 'react'
import Header from '../others/Header'
import Tasklist from '../others/Tasklist'
import Taskcards from '../others/Taskcards'

const Employeedashboard = () => {
  return (
   <div className='bg-slate-900 h-screen'>
   
   <Header/>
   <Tasklist/>
   <Taskcards/>
   </div>
  )
}

export default Employeedashboard
