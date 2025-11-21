import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>

            <div className='rounded-xl py-6 px-9 bg-blue-500 shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all duration-200'>
                <h2 className='text-3xl font-bold text-white'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl mt-0.5 font-medium text-blue-100'>New Task</h3>
            </div>
            <div className='rounded-xl py-6 px-9 bg-emerald-500 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-200'>
                <h2 className='text-3xl font-bold text-white'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl mt-0.5 font-medium text-emerald-100'>Completed Task</h3>
            </div>
            <div className='rounded-xl py-6 px-9 bg-amber-500 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all duration-200'>
                <h2 className='text-3xl text-white font-bold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl mt-0.5 text-amber-100 font-medium'>Accepted Task</h3>
            </div>
            <div className='rounded-xl py-6 px-9 bg-rose-500 shadow-lg shadow-rose-500/20 hover:scale-[1.02] transition-all duration-200'>
                <h2 className='text-3xl font-bold text-white'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl mt-0.5 font-medium text-rose-100'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers