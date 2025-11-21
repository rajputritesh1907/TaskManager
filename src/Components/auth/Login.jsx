import React, { useState } from 'react'

const Login = ({ handleLogin }) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center bg-zinc-950'>
            <div className='bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl p-12 w-full max-w-md'>
                <h1 className='text-3xl font-bold text-center text-white mb-8'>Welcome Back</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <div className='w-full mb-4'>
                        <label className='text-sm text-zinc-400 mb-1 block'>Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                            className='w-full outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-base py-3 px-4 rounded-lg placeholder:text-zinc-500 transition-all duration-200'
                            type="email"
                            placeholder='admin@me.com'
                        />
                    </div>
                    <div className='w-full mb-8'>
                        <label className='text-sm text-zinc-400 mb-1 block'>Password</label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            className='w-full outline-none bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white text-base py-3 px-4 rounded-lg placeholder:text-zinc-500 transition-all duration-200'
                            type="password"
                            placeholder='******'
                        />
                    </div>
                    <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg shadow-indigo-500/20'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login