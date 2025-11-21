import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-auto md:h-full w-full md:w-[300px] p-5 bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg hover:border-blue-500 transition-colors duration-300'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-blue-600/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-600/30'>{data.category}</h3>
                <h4 className='text-xs text-zinc-400 font-medium'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-bold text-white mb-2'>{data.taskTitle}</h2>
            <p className='text-sm text-zinc-400 leading-relaxed h-[55%] overflow-y-auto task-scroll'>
                {data.taskDescription}
            </p>
            <div className='mt-auto pt-4 border-t border-zinc-800'>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-200'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask