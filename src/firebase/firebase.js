import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDXv8Fb7sLPulxYyDBlUziDck--FHlQvTY",
    authDomain: "doctorboost-3329d.firebaseapp.com",
    projectId: "doctorboost-3329d",
    storageBucket: "doctorboost-3329d.appspot.com",
    messagingSenderId: "65980045273",
    appId: "1:65980045273:web:29fbd1944f8dc6b58aebc8",
    measurementId: "G-YZPHMHPWNQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
