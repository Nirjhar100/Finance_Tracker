import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAd2Bz89jyUrYtap6PDWtuZ3EUGj9k6_Fc",
    authDomain: "space-plan-c13c3.firebaseapp.com",
    databaseURL: "https://space-plan-c13c3.firebaseio.com",
    projectId: "space-plan-c13c3",
    storageBucket: "space-plan-c13c3.appspot.com",
    messagingSenderId: "371301146594",
    appId: "1:371301146594:web:4aa5748c47f11b424663bb",
    measurementId: "G-VT4L4DZTV4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
