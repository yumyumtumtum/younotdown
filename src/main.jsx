import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Plan from './pages/Plan'
import Voting from './pages/Voting'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Plan" element={<Plan />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Voting" element={<Voting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
