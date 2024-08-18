import React, { useEffect } from 'react'
import { getAllCards } from './services/operation/cardsApi'
import { BrowserRouter, Route, Routes ,Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useDispatch } from 'react-redux';
import NewCard from './Components/NewCard';
import Error from './Components/Error'




function App() {
  const dispatch = useDispatch();
  useEffect(()=>{ dispatch(getAllCards());},[]);
  return (
    <>
  
    <Navbar />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newcard' element={<NewCard/>}/>
          <Route path='*' element={<Error/>}/>      
     </Routes>
      
    </>
    
  )
}

export default App