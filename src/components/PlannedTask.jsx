import React, { useEffect, useState } from 'react'

const PlannedTask = (props) => {

  const copyTask = [...props.allTask]
  let plannedUnit = 'No tasks'
  let [status,setStatus] = useState('planned')

 
  return (
      <>
      {useEffect(()=>{
        plannedUnit = copyTask.map(function (elem, idx){
          console.log('hello')
                if (copyTask[idx].status=='inProcess'){
                  console.log("first")
                  return <div key={idx} className=' flex items-center justify-between px-3 py-2 mb-3 '>
                        <h3 className='text-xl font-semibold w-[65%] text-gray-100 bg-gray-800 px-3 py-2 rounded-xl'>{elem.taskInput}</h3>
                        <div className='flex gap-2 w-[30%] items-center  justify-between'>
                          <button 
                            
                            className='rounded px-4 py-2 bg-green-400 active:scale-75'>
                              {props.btnStatus}
                          </button>
                          <button 
                            
                            className='rounded px-4 py-2 bg-green-400 active:scale-75'>Done</button>
                        </div>
                      </div>
                }
              })
      },[status])}

      {/* Process Task block */}
        <div className='bg-gray-200 h-full w-2/3 rounded'>
            <h3 className='px-4 py-2 text-2xl font-semibold mb-3'>In Progress</h3>
            <div className='border-t-2'>
              {plannedUnit}
              
            </div>
          </div>

        {/* planned task block */}
        <div className='bg-gray-200 h-full w-2/3 rounded'>
            <h3 className='px-4 py-2 text-2xl font-semibold mb-3'>Planned</h3>
            <div className='border-t-2'>
              {copyTask.map(function (elem,idx){
                return <div key={idx} className=' flex items-center justify-between px-3 py-2 mb-3 '>
                        <h3 className='text-xl font-semibold w-[65%] text-gray-100 bg-gray-800 px-3 py-2 rounded-xl'>{elem.taskInput}</h3>
                        <div className='flex gap-2 w-[30%] items-center  justify-between'>
                          <button 
                            onClick={()=>{
                              copyTask[idx].status = 'inProcess'
                              setStatus('process') 
                            }}
                            className='rounded px-4 py-2 bg-green-400 active:scale-75'>
                              {props.btnStatus}
                          </button>
                          <button 
                            onClick={()=>{
                              copyTask[idx].status = 'done'
                              setStatus('done')
                            }}
                            className='rounded px-4 py-2 bg-green-400 active:scale-75'>Done</button>
                        </div>
                      </div>
              })}
            </div>
          </div>
          
      </>
        
      
      
  )
}

export default PlannedTask