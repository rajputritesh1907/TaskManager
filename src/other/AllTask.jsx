import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)


  return (
    <div className='bg-zinc-900 p-5 rounded-lg mt-5 h-64 overflow-auto task-scroll border border-zinc-800 shadow-xl'>
      <div className='bg-zinc-800 mb-2 py-3 px-4 flex justify-between rounded-lg sticky top-0 z-10 border border-zinc-700'>
        <h2 className='text-lg font-semibold w-1/5 text-zinc-200'>Employee Name</h2>
        <h3 className='text-lg font-semibold w-1/5 text-blue-400'>New Task</h3>
        <h5 className='text-lg font-semibold w-1/5 text-amber-400'>Active Task</h5>
        <h5 className='text-lg font-semibold w-1/5 text-emerald-400'>Completed</h5>
        <h5 className='text-lg font-semibold w-1/5 text-rose-400'>Failed</h5>
      </div>
      <div className=''>
        {userData.map(function (elem, idx) {
          return <div key={idx} className='border border-zinc-700 hover:bg-zinc-800 mb-2 py-3 px-4 flex justify-between rounded-lg transition-colors duration-200'>
            <h2 className='text-lg font-medium  w-1/5 text-zinc-300'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-amber-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-emerald-400'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-rose-400'>{elem.taskCounts.failed}</h5>
          </div>
        })}
      </div>


    </div>
  )
}

export default AllTask