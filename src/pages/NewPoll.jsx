import { useState } from 'react'
import Button from '../components/Button/Button'
import useFirestore from '../database/useFirestore'

function NewPoll() {
  const [pollType, setPollType] = useState('one')
  const [partySize, setPartySize] = useState(1)
  const [names, setNames] = useState([])

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

  // Define the fields we expect in the newpoll document.
  const fields = ['name']

  // Use the useFirestore hook to interact with the 'polls' collection.
  const {
    data, // The fetched data from Firestore.
    loading, // The loading state to indicate if data is still being fetched.
    error, // Any errors that may occur during fetching.
    newDocument, // The new document object to add a new poll.
    setNewDocument, // The function to update the new document.
    addDocument, // Function to add a new poll.
    updateDocument, // Function to update an existing poll.
    deleteDocument, // Function to delete a poll.
  } = useFirestore('polls', fields) // Pass the collection name and document fields to the hook.

  // Handle adding a new poll.
  const handleAddpoll = async () => {
    setNewDocument({ name: 'second_poll' })
    const response = await addDocument(newDocument)
    if (response.success) {
      alert('poll added successfully!')
      setNewDocument({ name: '' }) // Reset the form after successful addition.
    } else {
      ;``
      alert('Error adding poll.')
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

          <Button
            className={`mb-5 mt-4 ${names.length > 0 ? 'success' : 'disabled'}`}
            medium
            success={names.length > 0}
            disabled={names.length === 0} // Disable button when no names
            onClick={handleAddpoll}
          >
            Submit
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="">
      <Tabs tabOptions={POLL_TABS} />
    </div>
  )
}

export default NewPoll
