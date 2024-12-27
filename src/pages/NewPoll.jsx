import { useState } from 'react'
import NameList from '../components/NameList/NameList'

function Poll() {
  const [pollType, setPollType] = useState('one')
  const [partySize, setpartySize] = useState(1)
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
    setpartySize(partySize - 1)
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
            onClick={() => setpartySize(partySize + 1)}
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
      <Tabs tabs={POLL_TABS} />
    </div>
  )
}

export default Poll
