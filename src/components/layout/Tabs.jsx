import { useState } from 'react'

import clsx from 'clsx'

function Tabs({ children, tabs = ['default'] }) {
  let [activeTab, setActiveTab] = useState(tabs[0])

  const tabElements = tabs.map((tab) => {
    return (
      <div
        className={clsx(
          clsx({
            'bg-eggwhite-0 border-eggwhite-20 border-2 border-b-eggwhite-0 hover:bg-eggwhite-0 hover:text-primary-30 active:text-primary-60':
              activeTab === tab,
            'border-transparent border-2': activeTab !== tab,
          }),
          ' py-2 px-8 cursor-pointer hover:bg-eggwhite-10 active:bg-eggwhite-20 overflow-hidden',
        )}
        key={tab}
        onClick={() => {
          setActiveTab(tab)
        }}
      >
        {tab}
      </div>
    )
  })

  return (
    <div className="p-4">
      <div className="flex center-center">{tabElements}</div>
      <div className="border-t-2 border-eggwhite-20 -mt-0.5"></div>
      {children}
    </div>
  )
}

export default Tabs
