import React from 'react'
import CreatePoll from '../components/CreatePoll/CreatePoll'

function Home() {
  return (
    <div className="bg-app-background bg-cover bg-center min-h-screen">
      <Header />
      <CreatePoll />
    </div>
  )
}

export default Home
