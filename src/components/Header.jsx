const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
