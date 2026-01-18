const MovieTexts = ({ title, description }) => {
  return (
    <div className="pt-70 pl-40 absolute text-white w-screen aspect-video bg-linear-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/3 pt-2">{description}</p>
      <div className="pt-6">
        <button className="bg-red-500 text-white px-5 py-2 mr-2 rounded-md cursor-pointer hover:bg-opacity-80">
          Play
        </button>
        <button className="cursor-pointer bg-gray-700 px-5 py-2 rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTexts;
