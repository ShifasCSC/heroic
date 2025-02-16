import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import './App.css'
import Home from './Components/Home/Home'
import Edit from './Components/Edit/Edit'
import Create from './Components/Create/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/edit/:_id' element={<Edit/>}/>
    <Route path='/create' element={<Create/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
