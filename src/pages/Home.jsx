import React from 'react'
import CreatePoll from '../components/CreatePoll/CreatePoll'
import Header from '../components/Header/header'

const Home = () => {
  return (
    <div className="bg-app-background bg-cover bg-center min-h-screen">
      <Header />
      <CreatePoll />
    </div>
  )
}

export default Home
