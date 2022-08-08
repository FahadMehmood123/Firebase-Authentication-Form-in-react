import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfcai98HXN0l-R0wPGe2DrdFAUVgZxjsU",
  authDomain: "sign-in-form-321e8.firebaseapp.com",
  projectId: "sign-in-form-321e8",
  storageBucket: "sign-in-form-321e8.appspot.com",
  messagingSenderId: "276668864673",
  appId: "1:276668864673:web:636c641a829e773c8c38e0",
  measurementId: "G-J2G8TYPL4Q"
};

const fire = initializeApp(firebaseConfig);
export default fire;