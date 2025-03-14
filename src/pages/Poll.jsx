import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from '../firebase' // Assuming your Firestore instance is in a separate file

import _map from 'lodash/map'
import _find from 'lodash/find'
import _findIndex from 'lodash/findIndex'
import SurveyResults from '../components/survey/results'

function PollDetails() {
  const { pollId } = useParams()
  const [pollData, setPollData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const pollName = useMemo(() => {
    return pollData?.name
  })

  const nextUnansweredParticipantIndex = useMemo(() => {
    return _findIndex(pollData?.participants, (participant) => !participant.answer)
  })

  const nextUnansweredParticipant = useMemo(() => {
    if(nextUnansweredParticipantIndex === -1){
      return null
    }
    return pollData.participants[nextUnansweredParticipantIndex]
  })

  const fetchData = async () => {
    try {
      const docRef = doc(db, 'poll', pollId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setPollData(docSnap.data())
      } else {
        setError('No such document found.')
      }
    } catch (error) {
      setError('Error fetching data: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pollId]) // Only re-fetch data when docId changes

  const setParticipantAnswer = (value) => {
    const docRef = doc(db, 'poll', pollId)
    const participantData = [...pollData.participants]
    participantData[nextUnansweredParticipantIndex].answer = value

    updateDoc(docRef, {
      participants: participantData,
    })
    
    const allAnswered = participantData.every((participant) => participant.answer !== '')
  
    if(allAnswered){
      updateDoc(docRef, {
        status: 'Comeplete'
      })
    }

    fetchData()
  }

  // Poll States
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  if (!pollData) {
    return <div>No poll data found.</div>
  }
  return (
    <div className="flex flex-col h-screen w-full items-center mt-40 gap-8">
      <h2>{pollName}</h2>

      {nextUnansweredParticipant ?
      (<SurveyInput participant={nextUnansweredParticipant} input={setParticipantAnswer}></SurveyInput>)
      :null}
      {pollData.status === 'Comeplete' && <SurveyResults participants={pollData.participants}/>}
    </div>
  )
}

export default PollDetails
