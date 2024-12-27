import { useState } from 'react'

function Poll() {
  const [pollType, setPollType] = useState('one')

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
    { name: 'Party' },
  ]

  return (
    <div className="">
      <Tabs tabs={POLL_TABS} />
    </div>
  )
}

export default Poll
