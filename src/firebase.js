// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";




// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlyisvh6PRg-ShKe0QUSeki4JlgKLucI4",
  authDomain: "netflix-clone-274ed.firebaseapp.com",
  projectId: "netflix-clone-274ed",
  storageBucket: "netflix-clone-274ed.appspot.com",
  messagingSenderId: "974228887402",
  appId: "1:974228887402:web:0a428c593d5d2e55cef713",
  measurementId: "G-43FYKS6P4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user details to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User signed up and added to Firestore:", user.uid);
  } catch (error) {
    console.error("Error during signup:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(""))
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully");
  } catch (error) {
    console.error("Error during login:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(""))
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error during logout:", error.message);
  }
};

export { auth, db, signup, login, logout };
