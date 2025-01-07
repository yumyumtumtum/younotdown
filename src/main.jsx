import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Plan from './pages/Plan'
import NewPoll from './pages/NewPoll'
import Voting from './pages/Voting'
import Components from './pages/Components'
import Db from './pages/Db'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Plan" element={<Plan />} />
        <Route exact path="/NewPoll" element={<NewPoll />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Voting" element={<Voting />} />
        <Route exact path="/Components" element={<Components />} />
        <Route exact path="/Db" element={<Db />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
