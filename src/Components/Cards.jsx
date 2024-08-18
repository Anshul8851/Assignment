import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

function Cards() {
  const {cardsData,loading} = useSelector((state)=>state.card);
  return (
    <>
    <div className='w-11/12  mx-auto mt-8 flex flex-wrap justify-around gap-10 mb-12'>
        {
          loading?(
            <div className='text-xl font-bold'> Loading.....</div>
          ):(
            cardsData.length > 0 &&
            cardsData.map((element,index)=>(
              <Card key={index} title={element["title"]} description={element["description"]} />
            ))
          
          )
          
        }
    </div>
    
    </>
  )
}

export default Cards