// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD_uutHQk-YmjtuHeGhdnGf0qbJToEGOqE',
  authDomain: 'younotdown-df407.firebaseapp.com',
  projectId: 'younotdown-df407',
  storageBucket: 'younotdown-df407.firebasestorage.app',
  messagingSenderId: '382188825716',
  appId: '1:382188825716:web:567d4920f077c1ad033521',
  measurementId: 'G-DGKV8MT1MJ',
}

// Initialize Firebases
const App = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export default getFirestore(App)
