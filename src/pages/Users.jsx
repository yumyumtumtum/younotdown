import React, { useState } from 'react' // Import React and useState for state management.
import useFirestore from '../components/Db/useFirestore' // Import the custom hook to interact with Firestore.

const Users = () => {
  // Define the fields we expect in the user document.
  const fields = ['name', 'email', 'age']

  // Use the useFirestore hook to interact with the 'users' collection.
  const {
    data, // The fetched data from Firestore.
    loading, // The loading state to indicate if data is still being fetched.
    error, // Any errors that may occur during fetching.
    newDocument, // The new document object to add a new user.
    setNewDocument, // The function to update the new document.
    addDocument, // Function to add a new user.
    updateDocument, // Function to update an existing user.
    deleteDocument, // Function to delete a user.
  } = useFirestore('users', fields) // Pass the collection name and document fields to the hook.

  // Handle adding a new user.
  const handleAddUser = async () => {
    const response = await addDocument(newDocument)
    if (response.success) {
      alert('User added successfully!')
      setNewDocument({ name: '', email: '', age: '' }) // Reset the form after successful addition.
    } else {
      alert('Error adding user.')
    }
  }

  // Handle updating an existing user (you can pass the user's id and new data).
  const handleUpdateUser = async (id) => {
    const updatedData = {
      name: 'Updated Name',
      email: 'updated@example.com',
      age: 30,
    }
    const response = await updateDocument(id, updatedData)
    if (response.success) {
      alert('User updated successfully!')
    } else {
      alert('Error updating user.')
    }
  }

  // Handle deleting a user.
  const handleDeleteUser = async (id) => {
    const response = await deleteDocument(id)
    if (response.success) {
      alert('User deleted successfully!')
    } else {
      alert('Error deleting user.')
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Users</h1>

      {/* Form to add a new user */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Add New User</h2>
        <div>
          <input
            type="text"
            value={newDocument.name}
            onChange={(e) =>
              setNewDocument({ ...newDocument, name: e.target.value })
            }
            placeholder="Name"
            className="border border-gray-300 p-2 mb-2"
          />
        </div>
        <div>
          <input
            type="email"
            value={newDocument.email}
            onChange={(e) =>
              setNewDocument({ ...newDocument, email: e.target.value })
            }
            placeholder="Email"
            className="border border-gray-300 p-2 mb-2"
          />
        </div>
        <div>
          <input
            type="number"
            value={newDocument.age}
            onChange={(e) =>
              setNewDocument({ ...newDocument, age: e.target.value })
            }
            placeholder="Age"
            className="border border-gray-300 p-2 mb-2"
          />
        </div>
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add User
        </button>
      </div>

      {/* Displaying list of users */}
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching data.
      ) : error ? (
        <p className="text-red-500">Error fetching data.</p> // Show error message if there's an issue fetching data.
      ) : (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Age
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                  {user.age}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                  <button
                    onClick={() => handleUpdateUser(user.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Users
