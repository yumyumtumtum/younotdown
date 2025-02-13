import { useMemo } from 'react'


function SurveyInput({participant}) {
  const participantName = useMemo(() => {
      return participant?.name
    })
  return <div>{participantName}</div>
}

export default SurveyInput