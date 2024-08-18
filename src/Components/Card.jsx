import React from 'react'

function Card({title,description}) {
  return (
    <div className='bg-gray-100 w-[30rem] min-h-[9rem] rounded-xl border-2 border-solid border-purple-200'>
        <div className='font-bold text-2xl p-2 '>
            {title}
        </div>
        <hr className='border-1 border-solid border-purple-200'/>
        <div className='p-3'>
            {description} 
        </div>
    </div>
  )
}

export default Card