function Poll() {
  const POLL_TABS = [
    { name: 'Poll Details', content: <div> hey </div> },
    { name: 'Party' },
  ]

  return (
    <div className="">
      <Tabs tabs={POLL_TABS} />
    </div>
  )
}

export default Poll
