import { updateDoc, doc } from 'firebase/firestore' // Import Firestore's updateDoc function and doc function for referencing documents.
import db from '../../firebase'

// This custom hook will be used to update an existing document in a Firestore collection.
const useUpdateDocument = (collectionName) => {
  // The updateDocument function is used to update a document in a Firestore collection.
  const updateDocument = async (id, updatedData) => {
    try {
      // doc(db, collectionName, id) refers to the specific document in the collection by its ID.
      const docRef = doc(db, collectionName, id)
      // Update the document with the new data.
      await updateDoc(docRef, updatedData)
      return { success: true } // Return success if the update is successful.
    } catch (error) {
      console.error('Error updating document:', error) // Log an error if something goes wrong.
      return { success: false, error } // Return failure status and the error.
    }
  }

  return updateDocument // Return the function so it can be used in components.
}

export default useUpdateDocument // Export the hook to use it in other parts of the app.
