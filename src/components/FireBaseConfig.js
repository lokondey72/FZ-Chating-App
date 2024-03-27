import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6SJCn_hUYI4qDnd1BOrxfLcnFol1vIlY",
  authDomain: "friends-zone-chat-app.firebaseapp.com",
  projectId: "friends-zone-chat-app",
  storageBucket: "friends-zone-chat-app.appspot.com",
  messagingSenderId: "31033165835",
  appId: "1:31033165835:web:031203fea1c7ff724cdf0e",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig;
