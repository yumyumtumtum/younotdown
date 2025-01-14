import { useState } from 'react'
import Button from '../components/Button/Button'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase'

function NewPoll() {
  const [pollType, setPollType] = useState('one')
  const [partySize, setPartySize] = useState(1)
  const [names, setNames] = useState([])

  const [thenewpoll, setNewPoll] = useState(null)

  const handleNameChange = (index, newName) => {
    const updatedNames = [...names]
    updatedNames[index] = newName
    setNames(updatedNames)
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
        // This code takes the array of names and turns it into an object
        // It loops through the array and for each item, it creates a new key
        // on the object with the name of the key being "name1", "name2", etc.
        // and the value of that key is the actual name
        // So if the array of names is ["John", "Jane", "Bob"]
        // the resulting object would be {name1: "John", name2: "Jane", name3: "Bob"}
        ...Object.fromEntries(
          names.map((name, index) => {
            const key = `name${index + 1}` // create the key name
            const value = name // the value of that key is the name
            return [key, value] // return an array with the key and value
          }),
          // OR         names.map((name, index) => [`name${index + 1}`, name]),
        ),
      })

      // Get the document ID
      const docId = docRef.id

      // Redirect to another page with the document ID in the URL
      window.location.href = `/poll-details/${docId}`
    } catch (error) {
      console.error('ERROR ADDING POLL:', error)
    }
  }

  const POLL_TABS = [
    {
      name: 'Poll Details',
      content: (
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
            numPeople={partySize}
            names={names}
            onNameChange={handleNameChange}
            onDelete={onDelete}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="">
      <Tabs tabOptions={POLL_TABS} />

      {thenewpoll}

      <Button className="" medium onClick={handleAddpoll}>
        Submit
      </Button>
    </div>
  )
}

export default NewPoll
