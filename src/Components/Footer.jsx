import React from 'react'
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <>
        <div className='bg-black p-5 w-[99.5%]   mx-auto min-h-96 rounded-b-lg grid   md:grid-cols-5  '>
        <div className='flex flex-col text-white mt-10 items-start '>
            <div className='text-2xl font-bold mb-5'>Abstract</div>
            <div className='text-xl font-semibold'>Branches</div>
        </div>
        <div className='flex flex-col text-white items-start  mt-10 '>
            <div className='text-2xl font-bold mb-5'>Resources</div>
            <div className='text-xl font-semibold'>Blog</div>
            <div className='text-xl font-semibold'>Help Center</div>
            <div className='text-xl font-semibold'>Release Notes</div>
            <div className='text-xl font-semibold'>Status</div>
        </div>
        <div className='flex flex-col text-white items-start mt-10 '>
            <div className='text-2xl font-bold mb-5'>Community</div>
            <div className='text-xl font-semibold'>Twitter</div>
            <div className='text-xl font-semibold'>Linkedin</div>
            <div className='text-xl font-semibold'>Facebook</div>
            <div className='text-xl font-semibold'>Dribbble</div>
            <div className='text-xl font-semibold'>Podcast</div>
        </div>
        <div className='flex flex-col text-white items-start mt-10 '>
            <div className='text-2xl font-bold mb-5'>Company</div>
            <div className='text-xl font-semibold'>About Us</div>
            <div className='text-xl font-semibold'>Careers</div>
            <div className='text-xl font-semibold'>Legal</div>
            <div className='text-xl font-semibold'>Contact Us</div>
            <div className='text-xl font-semibold'>info@abstract.com</div>
        </div>
        <div className='md:relative '>
            <div className='md:flex md:flex-col text-white  mt-10 md:absolute md:bottom-3'>
                <div className='flex items-center'>
                    <MdCopyright className='text-xl' />
                    <div className='text-xl '>Copyright 2022</div>
                </div>
                <div className='text-xl '>Abstract Studio Design,Inc.</div>
                <div className='text-xl '>All rights reserves</div>
                
            </div>
        </div>
        
    </div>
    
     
    </>
  )
}

export default Footer