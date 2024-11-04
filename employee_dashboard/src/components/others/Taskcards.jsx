import React from 'react'

const Taskcards = () => {
  return (
    <div id="tasklist" className=' overflow-x-auto flex item-center justify-start flex-nowrap w-full h-[50%]  px-5 py-5 gap-5'>
      <div className=' flex-shrink-0 h-full w-[300px] bg-slate-950 rounded-xl'> 

       <div className='flex  items-center justify-between p-5'>
        <h1 className='bg-red-700 p-2 rounded text-xs'>High</h1>
        <h1 className='text-sm'> 20 feb 2024</h1>
       </div>
       <div className='px-4'>
       <h2 className='text-2xl font-semibold mt-5'>
        Make a Youtube Video
       </h2>
       <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nemo repellat ipsam laudantium minima placeat.</p>
       </div>
      </div>
      
      
      
     
      
      
    </div>
  )
}

export default Taskcards
