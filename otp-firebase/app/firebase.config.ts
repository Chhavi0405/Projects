
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTllHPXY4TttQkrsAziMSyXvUuL8CM53c",
  authDomain: "otp-project-6e225.firebaseapp.com",
  projectId: "otp-project-6e225",
  storageBucket: "otp-project-6e225.appspot.com",
  messagingSenderId: "152158256993",
  appId: "1:152158256993:web:c4cdd6e893a789107dcf20",
  measurementId: "G-HCJ5JFMHCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);