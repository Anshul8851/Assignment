import React from 'react'
import Search from './Search'
import Footer from './Footer'
import Cards from './Cards'


function Home() {
  return (
    <>
      <div className='h-full mb-auto'>
        <Search/>
        <Cards/>
      </div>
      
      <Footer/>
    </>
  )
}

export default Home