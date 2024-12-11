import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Plan from './pages/Plan'
import Voting from './pages/Voting'
import Components from './pages/Components'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Plan" element={<Plan />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Voting" element={<Voting />} />
        <Route exact path="/Components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
