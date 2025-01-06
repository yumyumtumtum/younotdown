import { useState, useEffect } from 'react'; // Import React hooks for managing state and side effects.
import { onSnapshot, collection } from 'firebase/firestore'; // Import Firestore's onSnapshot function to listen to real-time data updates.
import db from '../firebase'; // Import the Firebase database instance.
import useAddDocument from './useAddDocument'; // Import the hook for adding documents.
import useUpdateDocument from './useUpdateDocument'; // Import the hook for updating documents.
import useDeleteDocument from './useDeleteDocument'; // Import the hook for deleting documents.

// This is the main custom hook to interact with Firestore. It provides functionality to fetch, add, update, and delete documents.
const useFirestore = (collectionName, fields) => {
  const [data, setData] = useState([]); // State to store the fetched data from Firestore.
  const [newDocument, setNewDocument] = useState({}); // State to store the new document data that will be added.
  const [loading, setLoading] = useState(true); // State to track loading status while fetching data.
  const [error, setError] = useState(null); // State to store error message if any occurs.

  // Initialize the CRUD operation hooks with the collection name.
  const addDocument = useAddDocument(collectionName);
  const updateDocument = useUpdateDocument(collectionName);
  const deleteDocument = useDeleteDocument(collectionName);

  // Effect hook to fetch data from Firestore in real-time.
  useEffect(() => {
    // Set up a real-time listener to the Firestore collection.
    const unsubscribe = onSnapshot(
      collection(db, collectionName), // Specify the Firestore collection.
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Process the documents into a usable format.
        setData(data); // Store the fetched data in state.
        setLoading(false); // Set loading to false once data is fetched.
      },
      (error) => {
        setError('Error fetching data'); // Set an error message if the fetch fails.
        setLoading(false); // Stop loading if there is an error.
        console.error('Error fetching data from Firestore:', error); // Log the error.
      }
    );

    // Clean up the listener when the component is unmounted.
    return () => unsubscribe();
  }, [collectionName]);

  // Effect hook to initialize the new document data with empty fields.
  useEffect(() => {
    // Dynamically create the initial document structure based on the fields passed.
    const initialFields = fields.reduce((acc, field) => ({ ...acc, [field]: '' }), {});
    setNewDocument(initialFields); // Set the initial document structure in the state.
  }, [fields]);

  // Return the necessary values and functions so they can be used in a component.
  return {
    data, // The fetched data.
    loading, // The loading status.
    error, // The error message.
    newDocument, // The new document structure for adding a new document.
    setNewDocument, // The setter function for updating the new document.
    addDocument, // Function to add a new document.
    updateDocument, // Function to update an existing document.
    deleteDocument, // Function to delete a document.
  };
};

export default useFirestore; // Export the hook to use it in other parts of the app.
