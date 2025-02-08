import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from '../firebase' // Assuming your Firestore instance is in a separate file

import _map from 'lodash/map'

function PollDetails() {
  const { docId } = useParams()
  const [pollData, setPollData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const pollName = useMemo(() => {
    return pollData?.name
  })
  const pollParticipants = useMemo(() => {
    return _map(pollData?.participants, ({ name, answer }, index) => {
      return (
        <div key={`${index}-participant`}>
          <div>
            <strong>name:</strong>
            {name}
          </div>
          <div>
            <strong>answer:</strong>
            {answer}
          </div>
        </div>
      )
    })
  })

  const pollStatus = useMemo(() => {
    return pollData?.status
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'poll', docId)
        const docSnap = await getDoc(docRef)

        console.log(docSnap.data())

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

    fetchData()
  }, [docId]) // Only re-fetch data when docId changes

  const changePollData = () => {
    const docRef = doc(db, 'poll', docId)

    updateDoc(docRef, {})
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
      <h2>{pollName} Details</h2>

      {pollParticipants}

      {pollStatus}

      <Button onClick={changePollData}>update doc</Button>
    </div>
  )
}

export default PollDetails
