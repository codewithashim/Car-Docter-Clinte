import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";
import Swal from "sweetalert2";
const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // =================== google login  ===================
  const googleLoginProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // =================== Facebook login  ===================
  const facebookLoginProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // ==================== Email Sign Up ====================

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ==================== Email Sign In ====================
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserDetails = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // ==================== Sign Out ====================
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire("Succesfully Logout!", "You clicked the button!", "success");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        Swal.fire("Error!", "You clicked the button!", "error");
      });
  };
  // ==================== Reset Password ====================

  // ==================== Update Email ====================
  // ==================== Watcher ====================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  //====================== =========================
  const authInfo = {
    user,
    googleLoginProvider,
    facebookLoginProvider,
    error,
    setError,
    logout,
    loading,
    signInUser,
    createUser,
    updateUserDetails,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
