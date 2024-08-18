import React from 'react'
import ErrorImg from '../assets/Error.png'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='w-full flex flex-col items-center justify-center '>
        <img className='' src={ErrorImg} alt="" srcset="" />
        <Link to={'/'}>
            <button className='bg-gray-100 hover:bg-slate-200 p-3 rounded-lg'>Back To Home</button>
        </Link>
    </div>
  )
}

export default Error