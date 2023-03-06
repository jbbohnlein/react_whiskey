// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBmm3XQl_OM5DIeagDLQwdwqJ0I_f4G0cY",
  authDomain: "whiskey-shelf.firebaseapp.com",
  projectId: "whiskey-shelf",
  storageBucket: "whiskey-shelf.appspot.com",
  messagingSenderId: "691120817945",
  appId: "1:691120817945:web:c6967bcfa66d42d4cba788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);