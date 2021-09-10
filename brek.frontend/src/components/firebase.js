// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//For Google signin/up
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Configration
const firebaseConfig = {
  apiKey: "AIzaSyCXovlRgTBmG9TG4yM3c_xfZQwYfNEvJ7A",
  authDomain: "brek-8f65b.firebaseapp.com",
  projectId: "brek-8f65b",
  storageBucket: "brek-8f65b.appspot.com",
  messagingSenderId: "39490280697",
  appId: "1:39490280697:web:86ee955fb86f7c7f7c1628",
  measurementId: "G-G8JX4ZDD3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
var currUser=null;
// Google Sign In/Up Provider
const provider = new GoogleAuthProvider();

function googleSignIn() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    // The signed-in user info.
   
    // Todo: USE USER OBJECT TO ACESS DATA
    console.log(result);
    console.log(result.user.displayName);
    currUser = result.user.displayName;
    console.log((typeof(result.user)));

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error.message);
  });
}

// TODO: facebook sign in 

export {googleSignIn, currUser};
