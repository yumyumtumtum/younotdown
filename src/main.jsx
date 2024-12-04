import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Plan from './pages/Plan'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/Plan" element={<Plan />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
