
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-5 bg-zinc-900 mt-5 rounded-lg shadow-xl border border-zinc-800'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-full md:w-1/2'>
                    <div>
                        <h3 className='text-sm text-zinc-400 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full rounded outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4 text-white placeholder:text-zinc-500 transition-all duration-200' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-zinc-400 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full rounded outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4 text-white placeholder:text-zinc-500 transition-all duration-200' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-zinc-400 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full rounded outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4 text-white placeholder:text-zinc-500 transition-all duration-200' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-zinc-400 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-2 px-3 w-full rounded outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4 text-white placeholder:text-zinc-500 transition-all duration-200' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-zinc-400 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-zinc-500 transition-all duration-200 resize-none' name="" id=""></textarea>
                    <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-lg text-sm mt-4 w-full shadow-lg shadow-indigo-500/20 transition-all duration-200'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
