import { createContext, useContext, useState } from 'react'

const PollContext = createContext()

export function PollProvider({ children }) {
  const [numPeople, setNumPeople] = useState(0)
  const [names, setNames] = useState([])

  return (
    <PollContext.Provider
      value={{
        numPeople,
        setNumPeople,
        names,
        setNames,
      }}
    >
      {children}
    </PollContext.Provider>
  )
}

export const usePoll = () => useContext(PollContext)
