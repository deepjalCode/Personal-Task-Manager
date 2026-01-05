import React from 'react'

const CompletedTask = (props) => {
  return (
    <div className='bg-gray-200 h-full w-2/3 rounded'>
      <h3 className='px-4 py-2 text-2xl font-semibold'>Completed</h3>
      <div>
        <h3>No tasks</h3>
      </div>
    </div>
  )
}

export default CompletedTask