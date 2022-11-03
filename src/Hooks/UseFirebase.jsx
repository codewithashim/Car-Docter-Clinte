import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import Swal from "sweetalert2";

const UseFirebase = () => {
  const {
    googleLoginProvider,
    facebookLoginProvider,
    setError,
    signInUser,
    updateUserDetails,
    createUser,
  } = useContext(AuthContext);
  // =================== google login  ====================
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleLogin = (event) => {
    event.preventDefault();
    googleLoginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Succesfully Login!", "You clicked the button!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // =================== Facebook login  ==================
  const facebookProvider = new FacebookAuthProvider();
  const handelFacebookLogin = (event) => {
    event.preventDefault();
    facebookLoginProvider(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Succesfully Login!", "You clicked the button!", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "You clicked the button!", "error");
      });
  };

  // ==================== Email Sign Up ===================

  const handelEmailSignUp = (event) => {
    event.preventDefault();
    console.log("Email Sign Up");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.fullname.value;
    const photo = form.photoURL.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handelUpdateUseerDetails(name, photo);
        Swal.fire("Succesfully Sign Up!", "You clicked the button!", "success");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        Swal.fire("Error!", "You clicked the button!", "error");
      });
  };

  const handelUpdateUseerDetails = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserDetails(profile)
      .then((result) => {
        console.log(result);
        // Swal.fire("Succesfully Update!", "You clicked the button!", "success");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        Swal.fire("Error!", "You clicked the button!", "error");
      });
  };

  // ==================== Email Sign In ===================

  const handelEmailSignIn = (event) => {
    event.preventDefault();
    console.log("Email Sign In");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Succesfully Sign In!", "You clicked the button!", "success");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        Swal.fire("Error!", "You clicked the button!", "error");
      });
  };

  //=======================================================

  return {
    handelGoogleLogin,
    handelFacebookLogin,
    handelEmailSignIn,
    handelEmailSignUp,
  };
};

export default UseFirebase;
