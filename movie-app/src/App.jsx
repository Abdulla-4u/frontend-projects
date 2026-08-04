import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "../components/Movie-Card/MovieCard";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchMovies = async (title) => {
    let response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=f5755fe6&s=${title}`
    );
    let data = await response.json();
    console.log(data);
    setData(data.Search);
  };

  useEffect(() => {
    searchMovies('SuperMan')
  }, [])


  return (
    <div className="bg-gray-800 min-h-screen w-full pt-14">
        <h1 className="text-4xl text-orange-300 font-semibold text-center">
          Movieland
        </h1>
        <div className="bg-gray-700 h-12 sm:w-4/6 sm:mx-auto rounded-full flex items-center justify-between px-3 my-10 py-7 mx-5">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Movie"
            className="w-full text-lg h-10 border-0 outline-none text-white bg-transparent rounded-full sm:px-6 px-3 placeholder:text-base sm:placeholder:text-lg"
          />
          <button
            onClick={() => {
              searchMovies(searchValue);
            }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 font-semibold rounded-full"
          >
            Search
          </button>
        </div>
        <div className="grid items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[85%] mx-auto lg:px-10 md:px-5 px-3 gap-6 mt-10 pb-10">
          {data.length > 0 ?
            data.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))
            :
            <div className="text-white[] col-span-4 justify-self-center mt-32 xl:mt-52 ">
              <div className="loader"></div>
            </div>
          }
        </div>
      </div>
  );
}

export default App;
