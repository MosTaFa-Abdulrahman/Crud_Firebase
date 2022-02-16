import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeYdFhc5_UZ9B4WMtTbMCmkV2NNw82By8",
  authDomain: "fir-crud-ebc54.firebaseapp.com",
  projectId: "fir-crud-ebc54",
  storageBucket: "fir-crud-ebc54.appspot.com",
  messagingSenderId: "930632437340",
  appId: "1:930632437340:web:2c2bf43c7f1c524d7ee099",
  measurementId: "G-ENRC14TRG0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
