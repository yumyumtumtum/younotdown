import { useMemo } from 'react'


function SurveyInput({participant}) {
  const participantName = useMemo(() => {
      return participant?.name
    })
  return (
  <div>
    {participantName}
    <div className="space-x-10">
      <Button large>I'm Down</Button>
      <Button large danger>I'm Not down</Button>
    </div>
  </div>
  )
}

export default SurveyInput