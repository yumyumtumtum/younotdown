import React, { useState } from 'react'
import NameList from '../NameList/NameList'

function PollForm() {
  const [numPeople, setNumPeople] = useState(0)
  const [names, setNames] = useState([])
  const [pollCreated, setPollCreated] = useState(false)

  // Function to handle number of people changes
  const handleNumPeopleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0
    setNumPeople(value)
    setNames(Array(value).fill(''))
  }

  // Function to handle name changes
  const handleNameChange = (index, newName) => {
    const updatedNames = [...names]
    updatedNames[index] = newName
    setNames(updatedNames)
  }

  // Function to create the poll and set pollCreated to true
  const handleCreatePoll = () => {
    if (names.every((name) => name.trim() !== '')) {
      console.log('Poll created with names:', names)
      setPollCreated(true)
    } else {
      alert('Please fill out all name fields.')
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="numPeople">Number of People:</label>
        <input
          id="numPeople"
          type="number"
          min="0"
          value={numPeople}
          onChange={handleNumPeopleChange}
        />
      </div>

      <NameList
        numPeople={numPeople}
        names={names}
        onNameChange={handleNameChange}
      />

      <button
        onClick={handleCreatePoll}
        className="bg-black py-4 px-7 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Create Poll
      </button>

      {pollCreated && (
        <div>
          <h3>Poll Successfully Created!</h3>
          <p>Participants:</p>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PollForm
