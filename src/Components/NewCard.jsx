import { useState } from 'react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../services/operation/cardsApi';

function NewCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData,setFormData] = useState({
    title:"",
    description:""
  })
  const {title,description} = formData;
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addCard(title,description,navigate));
  }
  const handleOnChange = (e)=>{
    setFormData((prevData)=>(
      {
        ...prevData,
        [e.target.name]:e.target.value
      }
    ))
  }
  return (
    <div className='w-[50%]  mx-auto h-[60vh]  flex flex-col items-center justify-center'>
      <div className='flex items-start text-2xl font-semibold'>Enter Card Details</div>
      <form onSubmit={handleSubmit} className=' flex flex-col px-5 py-5 gap-6' >
        <input required onChange={handleOnChange} value={title} name='title' type="text" placeholder='Enter Title' className='px-3 py-2 bg-slate-100 rounded-lg'   />
        <input required onChange={handleOnChange} value={description} name='description' type="text" placeholder='Enter Description' className='px-3 bg-slate-100 py-2 rounded-lg'/>
        <button className='bg-black text-white font-semibold p-2 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default NewCard