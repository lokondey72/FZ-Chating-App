import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEAIR_Itl38sUbg37qKbE9To1Mv8AAcrQ",
  authDomain: "friend-zone-app-e6612.firebaseapp.com",
  databaseURL: "https://friend-zone-app-e6612-default-rtdb.firebaseio.com",
  projectId: "friend-zone-app-e6612",
  storageBucket: "friend-zone-app-e6612.appspot.com",
  messagingSenderId: "712673870170",
  appId: "1:712673870170:web:62fbd1faf62bb7ff47f363",
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig;
