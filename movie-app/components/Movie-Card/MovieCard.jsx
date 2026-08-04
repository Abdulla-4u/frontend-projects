import React from "react";
import img from '../../src/assets/wallpaperflare.com_wallpaper (1).jpg'
const MovieCard = ({movie}) => {
  return (
    <div className="bg-sky-600 border shadow-lg relative movieCard overflow-hidden rounded-lg z-50">
      <p className="absolute left-3 top-2 opacity-0 duration-500">{movie.Year}</p>
      <img src={movie.Poster !== 'N/A'? movie.Poster : img} alt="title" className="object-cover object-center max-w-full h-20" />
      <div className="px-3 py-4">
        <p className="mb-2 text-orange-400">{movie.Type}</p>
        <h3 className="text-lg text-white font-semibold">
          {movie.Title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;