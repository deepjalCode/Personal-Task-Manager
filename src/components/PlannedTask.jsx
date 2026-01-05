import React from 'react'

const PlannedTask = (props) => {
  return (
      <div className='bg-gray-200 h-full w-2/3 rounded'>
            <h3 className='px-4 py-2 text-2xl font-semibold mb-3'>Planned</h3>
            <div className='border-t-2'>
              {props.allTask.map(function (elem,idx){
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
              })}
            </div>
          </div>
  )
}

export default PlannedTask