import { useState, useRef, useEffect } from 'react'
import Button from '../components/Button/Button'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase'

function NewPoll() {
  const [pollType, setPollType] = useState('one')
  const [partySize, setPartySize] = useState(1)
  const [names, setNames] = useState([])
  const [pollName, setPollName] = useState('')

  const handleNameChange = (index, newName) => {
    const updatedNames = [...names]
    updatedNames[index] = newName
    setNames(updatedNames)
  }

  const nameListRef = useRef(null)
  const onAdd = (index) => {
    setPartySize(partySize + 1)

    setTimeout(() => {
      document.getElementById(`name-${index + 1}`).focus()
    }, 1)
  }

  const onDelete = (index) => {
    const newNames = [...names]
    newNames.splice(index, 1)
    setNames(newNames)
    setPartySize(partySize - 1)
  }

  const handleAddpoll = async () => {
    try {
      const docRef = await addDoc(collection(db, 'poll'), {
        name: pollName,
        participants: names.map((name) => {
          return { name, answer: '', status: 'running' }
        }),
      })

      // Get the document ID
      const docId = docRef.id

      // Redirect to another page with the document ID in the URL
      window.location.href = `/poll/${docId}`
    } catch (error) {
      console.error('ERROR ADDING POLL:', error)
    }
  }

  const POLL_TABS = [
    {
      name: 'Poll Details',
      content: (
        <div className="flex flex-col gap-8">
          <div>
            <strong>Poll Name</strong>
            <input
              className="ml-8 border-2 p-1 rounded-lg"
              value={pollName}
              onChange={(e) => setPollName(e.target.value)}
            ></input>
          </div>

          <div>
            <strong> Poll Type</strong>
            <Select
              className="ml-8 border-2 p-1 rounded-lg"
              value={pollType}
              options={[
                { key: 'down', value: 'Are you Down?' },
                { key: 'soon', value: 'Coming Soon?', disabled: true },
              ]}
              onChange={setPollType}
            />
          </div>
        </div>
      ),
    },
    {
      name: 'Party',
      content: (
        <div>
          <Button
            className="mb-4"
            small
            secondary
            onClick={() => setPartySize(partySize + 1)}
          >
            Add Person
          </Button>

          <NameList
            innerRef={nameListRef}
            numPeople={partySize}
            names={names}
            onNameChange={handleNameChange}
            onDelete={onDelete}
            addName={(value) => onAdd(value)}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="">
      <Tabs tabOptions={POLL_TABS} />

      <Button
        className=""
        medium
        onClick={handleAddpoll}
        disabled={partySize < 1 || !pollName}
      >
        Submit
      </Button>
    </div>
  )
}

export default NewPoll
