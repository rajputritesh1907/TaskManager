import React, { useState } from 'react'
import { setLocalStorage } from '../utils/LocalStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }


  return (
    <div className='flex items-end justify-between mb-10'>
      <h1 className='text-2xl font-medium text-zinc-400'>Hello <br /> <span className='text-3xl font-bold text-white'>username 👋</span></h1>
      <button onClick={logOutUser} className='bg-rose-600 hover:bg-rose-700 text-white text-base font-medium px-6 py-2 rounded-lg shadow-lg shadow-rose-500/20 transition-all duration-200'>Log Out</button>
    </div>
  )
}

export default Header
