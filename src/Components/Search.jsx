import React, { useEffect, useState } from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { searchCard } from '../services/operation/cardsApi';
import { useDispatch } from 'react-redux';

function Search() {
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (e) =>{
    setInput(e.target.value);
  }
  
  useEffect(()=>{
  
    dispatch(searchCard(input));
  },
  [input,setInput])
  return (
    <div className='bg-purple-100 h-[15rem] flex flex-col items-center justify-center gap-5'>
        <h1 className='font-bold text-4xl'>How can we help?</h1>
        <div className='flex items-center'>
            <input value={input} onChange={handleOnChange} type="text" placeholder='Search' className=' p-2 rounded-sm border-solid border-2 border-black sm:w-[15rem] lg:w-[35rem]'/>
            <MdArrowRightAlt  className='text-2xl relative -translate-x-10 cursor-pointer'/>
        </div>
       
    </div>
  )
}

export default Search