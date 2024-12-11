import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);  // Track if navigation has been initialized

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!initialized) {
        setInitialized(true);  // Prevent multiple triggers
        if (user) {
          console.log("Logged In");
          navigate('/');  // Navigate to home page if logged in
        } else {
          console.log("Logged Out");
          navigate('/login');  // Navigate to login page if logged out
        }
      }
    });
  }, [initialized, navigate]);  // Add `initialized` to the dependency array to prevent repeated navigation

  return (
    <>
      <ToastContainer theme='light' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
