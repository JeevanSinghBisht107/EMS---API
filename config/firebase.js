// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHB3m3iTvnVHGb36y0JPwmVuoJaxLnRqE",
  authDomain: "ems-images-5a939.firebaseapp.com",
  projectId: "ems-images-5a939",
  storageBucket: "ems-images-5a939.appspot.com",
  messagingSenderId: "485556018708",
  appId: "1:485556018708:web:d4f12b9d74b4c92655d101",
  measurementId: "G-XLNCBWLMYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };