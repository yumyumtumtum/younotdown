import { useState, useMemo } from 'react'

import clsx from 'clsx'

function Tabs({ tabs = [{ name: 'default', content: <div> default </div> }] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].name)
  const currentContent = useMemo(() => {
    return tabs.find((tab) => tab.name === activeTab)?.content
  })

  const tabElements = tabs.map((tab) => {
    return (
      <div
        className={clsx(
          clsx({
            'bg-eggwhite-0 border-eggwhite-20 border-2 border-b-eggwhite-0 hover:bg-eggwhite-0 hover:text-primary-30 active:text-primary-60':
              activeTab === tab.name,
            'border-transparent border-2': activeTab !== tab.name,
          }),
          'rounded-t-lg py-2 px-8 cursor-pointer hover:bg-eggwhite-10 active:bg-eggwhite-20 overflow-hidden',
        )}
        key={tab.name}
        onClick={() => {
          setActiveTab(tab.name)
        }}
      >
        {tab.name}
      </div>
    )
  })

  return (
    <div className="p-4">
      <div className="flex center-center">{tabElements}</div>
      <div className="border-t-2 border-eggwhite-20 -mt-0.5"></div>

      <div className="m-auto center-center my-8">{currentContent}</div>
    </div>
  )
}

export default Tabs
