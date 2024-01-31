import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDgLzFh8G5toG0mC89E7dWGgNeTFjAhnu8",
    authDomain: "pokecom-5f29e.firebaseapp.com",
    projectId: "pokecom-5f29e",
    storageBucket: "pokecom-5f29e.appspot.com",
    messagingSenderId: "398139307633",
    appId: "1:398139307633:web:396ff6701b6d2cfc774dd0",
    measurementId: "G-4QT6SV50NV"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);
