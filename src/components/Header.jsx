import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const [showProfile, setShowProfile] = useState(false);

  console.log("userDatauserData", userData);
  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };
  return (
    <div className="px-40 py-8 flex justify-between z-20 absolute w-full">
      <img
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Netflix-Logo"
        className="w-40"
      />
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
            src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
            alt="icon-url"
            className="w-10"
            onClick={() => setShowProfile(!showProfile)}
          />
        )}
        {showProfile && (
          <div>
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
