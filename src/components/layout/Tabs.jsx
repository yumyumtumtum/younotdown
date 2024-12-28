import { useState, useMemo } from 'react'

import clsx from 'clsx'

function Tabs({ tabOptions }) {
  const [activeTab, setActiveTab] = useState(tabOptions[0]?.name)

  const currentContent = useMemo(() => {
    return tabOptions.find((tabOption) => tabOption.name === activeTab)?.content
  })

  const tabElements = tabOptions.map((tabOption) => {
    return (
      <div
        className={clsx(
          clsx({
            'bg-eggwhite-0 border-eggwhite-20 border-2 border-b-eggwhite-0 hover:bg-eggwhite-0 hover:text-primary-30 active:text-primary-60':
              activeTab === tabOption.name,
            'border-transparent border-2': activeTab !== tabOption.name,
          }),
          'rounded-t-lg py-2 px-8 cursor-pointer hover:bg-eggwhite-10 active:bg-eggwhite-20 overflow-hidden',
        )}
        key={tabOption.name}
        onClick={() => {
          setActiveTab(tabOption.name)
        }}
      >
        {tabOption.name}
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
