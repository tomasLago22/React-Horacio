
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDtGMBNd_OvXitKZ5TbCHwu54SrEVWyObA",
  authDomain: "cursoreact-133ba.firebaseapp.com",
  projectId: "cursoreact-133ba",
  storageBucket: "cursoreact-133ba.appspot.com",
  messagingSenderId: "397227796168",
  appId: "1:397227796168:web:0cb63923b3f8ccaa18e7fd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);