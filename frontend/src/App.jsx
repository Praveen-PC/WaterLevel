import { useState } from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/Home'
import Shape from './component/Shape'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/shape' element={<Shape/>}/>
    </Routes>
    
    
    </BrowserRouter>
   
    </>
  )
}

export default App
