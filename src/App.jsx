import React, { useState } from 'react'
import PlannedTask from './components/PlannedTask'
import ProcessTask from './components/ProcessTask'
import CompletedTask from './components/CompletedTask'

const App = () => {
  const [taskInput,setTaskInput] = useState('')
  const [allTask, setAllTask] = useState([])
  const taskPreview = "No Tasks"
  const btnStatus = 'Start'

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
          <ProcessTask allTask={allTask} />
          <PlannedTask allTask={allTask} btnStatus={btnStatus} />
          <CompletedTask />
        </div>
    </div>
  )
}

export default App