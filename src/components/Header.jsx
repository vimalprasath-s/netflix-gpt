import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOGO, USER_LOGO } from "../constants/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Firebase will give unsubscribe fucntion
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };
  return (
    <div className="px-20 py-8 flex justify-between z-20 absolute w-full">
      <img src={LOGO} alt="Netflix-Logo" className="w-40" />
      <div>
        {/* <select className="py-1 px-2 bg-black text-white rounded cursor-pointer mx-2">
          <option value="en">English</option>
          <option value="tm">Tamil</option>
        </select> */}
        {/* <button className="bg-red-600 text-white rounded px-4 py-1 cursor-pointer font-semibold">
          Sign In
        </button> */}
        {userData && (
          <img
            src={USER_LOGO}
            alt="icon-url"
            className="w-10"
            onClick={() => setShowProfile(!showProfile)}
          />
        )}
        {showProfile && (
          <div className="text-white">
            <p>{userData?.displayName}</p>
            <button className="cursor-pointer" onClick={signOutHandle}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
