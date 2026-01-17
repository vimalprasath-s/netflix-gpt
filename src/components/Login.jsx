import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm, validateSignUpForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [showLogIn, setShowLogIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setErrorMessage(null);
    const error = showLogIn
      ? validateLoginForm(email.current.value, password.current.value)
      : validateSignUpForm(
          name.current.value,
          email.current.value,
          password.current.value
        );
    if (error) {
      setErrorMessage(error);
      return;
    }
    if (showLogIn) {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setErrorMessage(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "Error Message --" + errorMessage);
        });
    } else {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              console.log("user", user);
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
              setErrorMessage(null);
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "Error Message --" + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      <div
        className="absolute z-0 inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg')",
        }}
      />
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `
        linear-gradient(
          7deg,
          rgba(0,0,0,0.80) 10%,
          rgba(0,0,0,0.79) 17%,
          rgba(0,0,0,0.74) 39%,
          rgba(0,0,0,0.67) 53%,
          rgba(0,0,0,0.60) 68%,
          rgba(0,0,0,0.55) 97%
        )
      `,
        }}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black/60 top-1/6 left-0 right-0 mx-auto p-12 rounded-2xl w-115"
      >
        <h2 className="text-3xl text-white mb-8 font-bold">
          {showLogIn ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex flex-col">
          {!showLogIn && (
            <input
              type="text"
              placeholder="Full name"
              ref={name}
              className="border border-white px-4 py-3 rounded text-white mb-4 w-full"
            />
          )}

          <input
            type="text"
            placeholder="Email or mobile number"
            ref={email}
            className="border border-white px-4 py-3 rounded text-white mb-4 w-full"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="border border-white px-4 py-3 rounded text-white"
          />
          {errorMessage && <p className="p-2 text-red-500">{errorMessage}</p>}
          <button
            onClick={handleSubmit}
            className="bg-red-600 my-6 p-2 rounded text-white font-bold cursor-pointer"
          >
            {showLogIn ? "Sign In" : "Sign Up"}
          </button>
          {showLogIn ? (
            <p className="text-white px-2">
              New to Netflix?{" "}
              <button
                onClick={() => setShowLogIn(!showLogIn)}
                className="font-bold cursor-pointer hover:underline"
              >
                Sign up now.
              </button>
            </p>
          ) : (
            <p className="text-white px-2">
              Already have Netflix?{" "}
              <button
                onClick={() => setShowLogIn(!showLogIn)}
                className="font-bold cursor-pointer hover:underline"
              >
                Sign in.
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
