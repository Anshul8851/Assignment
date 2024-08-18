import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='w-[99.5%] mx-auto h-[3rem] bg-black text-white flex items-center justify-around rounded-t-lg mt-[0.1rem]'>
            <Link to={'/'}>
            <div className='flex space-x-2 cursor-pointer'>
                <div>Abstract</div>
                <div>|</div>
                <div>HelpCenter</div>
            </div>
            
            </Link>
            <div className='w-12'></div>
            <div>
              <Link to={'/newcard'}>
                 <button className='border-2 border-white p-1 rounded-lg hover:text-black hover:bg-white hover:border-black'>Submit a request</button>
              </Link>
                
            </div>
        </div>
    </>
  )
}

export default Navbar