import React, { useState } from 'react'

const App = () => {
  const [taskInput,setTaskInput] = useState('')
  const [allTask, setAllTask] = useState([])
  const taskPreview = "No Tasks"


  const inputHandler = (e)=>{
    setTaskInput(e.target.value)
  }

  const submitTask = ()=>{
    const copyTask = [...allTask]
    copyTask.push({taskInput,status:'Planned'})
    setAllTask(copyTask)
    setTaskInput('')
  }

  return (
    <div className='h-screen w-full bg-gray-900 '>
      
        <div>
          <h1 className='text-4xl font-bold text-gray-100 text-center px-4 py-6 mb-5'>Personal Manager</h1>
        </div>
        <div className='w-full flex items-center justify-center gap-10 px-12 py-6 '>
          <input
            onChange={(e)=>{
              inputHandler(e)
            }}
            value={taskInput}
            required
            className='text-xl  bg-gray-300 px-3 py-1 rounded' 
            type="text" 
            placeholder='Enter Task' />
          <button 
            onClick={()=>{
              submitTask()
            }}
            className='rounded text-xl bg-green-400 px-4 py-1 active:scale-95 cursor-pointer'>  
            Plan
          </button>
        </div>
        <div className='w-full mt-7 h-[60%] flex items-center justify-between gap-3 px-6 '>
          <div className='bg-gray-200 h-full w-2/3 rounded'>
            <h3 className='px-4 py-2 text-2xl font-semibold'>In Progress</h3>
            <div>
              <h3>{taskPreview}</h3>
            </div>
          </div>
          <div className='bg-gray-200 h-full w-2/3 rounded'>
            <h3 className='px-4 py-2 text-2xl font-semibold mb-3'>Planned</h3>
            <div className='border-t-2'>
              {allTask.map(function (elem,idx){
                return <div key={idx} className=' flex items-center justify-between px-3 py-2 mb-3 '>
                        <h3 className='text-xl font-semibold w-[65%] text-gray-100 bg-gray-800 px-3 py-2 rounded-xl'>{elem.taskInput}</h3>
                        <div className='flex gap-2 w-[30%] items-center  justify-between'>
                          <button className='rounded px-4 py-2 bg-green-400'>Start</button>
                          <button className='rounded px-4 py-2 bg-green-600'>Done</button>
                        </div>
                      </div>
              })}
            </div>
          </div>
          <div className='bg-gray-200 h-full w-2/3 rounded'>
            <h3 className='px-4 py-2 text-2xl font-semibold'>Completed</h3>
            <div>
              <h3>{taskPreview}</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App