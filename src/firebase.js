import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYyabHvmSegyyiQa26NY88MVaK9xr3vbU",
    authDomain: "nort-sport.firebaseapp.com",
    projectId: "nort-sport",
    storageBucket: "nort-sport.appspot.com",
    messagingSenderId: "584063605019",
    appId: "1:584063605019:web:f0f1c163d4a4933f5e5bbe"
  };

  const app = initializeApp(firebaseConfig);

  export const db =  getFirestore(app);