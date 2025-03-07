import { useMemo, useState, useEffect } from 'react'

function SurveyInput({participant, input}) {
  const participantName = useMemo(() => {
      return participant?.name
    })
  return (
  <div className="text-center text-5xl">
    {participantName}
    <div className="space-x-10">
      <Button large onClick={() => input('Down')}>I'm Down</Button>
      <Button large danger onClick={() => input('Not Down')}>I'm Not down</Button>
    </div>
  </div>
  )
}

export default SurveyInput