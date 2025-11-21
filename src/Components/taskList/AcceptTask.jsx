
import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-auto md:h-full w-full md:w-[300px] p-5 bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg hover:border-amber-500 transition-colors duration-300'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-amber-600/20 text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-600/30'>{data.category}</h3>
                <h4 className='text-xs text-zinc-400 font-medium'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-bold text-white mb-2'>{data.taskTitle}</h2>
            <p className='text-sm text-zinc-400 leading-relaxed h-[45%] overflow-y-auto task-scroll'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-auto pt-4 border-t border-zinc-800 gap-2'>
                <button className='flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200'>Mark Completed</button>
                <button className='flex-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200'>Mark Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
