import { deleteDoc, doc } from 'firebase/firestore' // Import Firestore's deleteDoc function and doc function for referencing documents.
import db from '../firebase'

// This custom hook will be used to delete a document from a Firestore collection.
const useDeleteDocument = (collectionName) => {
  // The deleteDocument function is used to delete a document in the Firestore collection by its ID.
  const deleteDocument = async (id) => {
    try {
      // doc(db, collectionName, id) refers to the specific document in the collection by its ID.
      const docRef = doc(db, collectionName, id)
      // Delete the document from Firestore.
      await deleteDoc(docRef)
      return { success: true } // Return success if the document is deleted.
    } catch (error) {
      console.error('Error deleting document:', error) // Log an error if something goes wrong.
      return { success: false, error } // Return failure status and the error.
    }
  }

  return deleteDocument // Return the function so it can be used in components.
}

export default useDeleteDocument // Export the hook to use it in other parts of the app.
