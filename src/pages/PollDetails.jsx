import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firebase' // Assuming your Firestore instance is in a separate file

function PollDetails() {
  const { docId } = useParams()
  const [pollData, setPollData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'poll', docId)
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

    fetchData()
  }, [docId]) // Only re-fetch data when docId changes

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
    <div>
      <h2>Poll Details</h2>
      <ul>
        {Object.keys(pollData)
          .filter((key) => key.startsWith('name'))
          .map((key, index) => (
            <li key={index}>
              {key}: {pollData[key]}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PollDetails
