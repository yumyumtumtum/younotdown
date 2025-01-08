import { addDoc } from 'firebase/firestore' // Import Firestore's addDoc function to add documents to a collection.
import db from '../../firebase'

// This custom hook will be used to add new documents to a Firestore collection.
const useAddDocument = (collectionName) => {
  // The addDocument function that will be used to add a document to the Firestore collection.
  const addDocument = async (document) => {
    try {
      // addDoc takes the collection reference and the data we want to add.
      await addDoc(collection(db, collectionName), document)
      return { success: true } // Return success if the document is added.
    } catch (error) {
      console.error('Error adding document:', error) // Log an error if something goes wrong.
      return { success: false, error } // Return failure status and the error.
    }
  }

  return addDocument // Return the function so it can be used in components.
}

export default useAddDocument // Export the hook to use it in other parts of the app.
