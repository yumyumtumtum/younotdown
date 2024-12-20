import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../firebase'

function Db() {
  const [accounts, setAccounts] = useState([])

  // Fetch accounts data in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'accounts'),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setAccounts(data)
      },
      (error) => {
        console.error('Error fetching accounts:', error)
      },
    )

    return () => unsubscribe()
  }, [])
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Accounts</h1>
      {accounts.length > 0 ? (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                First Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Last Name
              </th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr
                key={account.id}
                className="even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                  {account.fname}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                  {account.lname}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No accounts found.</p>
      )}
    </div>
  )
}

export default Db
