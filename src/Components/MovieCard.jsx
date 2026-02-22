
import React from "react";

export default function MovieCard  ({
  movie: { title, vote_average, poster_path, release_date, original_language },
})  {
  return (
    <li className="movie-card group">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path.trim()}`
              : "/no-movie.png"
          }
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover - desktop only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex flex-col justify-end p-4 hidden md:flex">
          <p className="text-white/90 text-sm line-clamp-3">{title}</p>
        </div>
      </div>
      
      <div className="mt-3 px-1">
        <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 min-h-[1.5rem]">
          {title}
        </h3>
        
        <div className="content mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
          <div className="rating flex items-center gap-1">
            <img src="star.avif" alt="star" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-bold text-white">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </span>
          </div>
          
          <span className="text-gray-100 hidden xs:inline">•</span>
          <span className="lang capitalize text-gray-100 font-medium">
            {original_language}
          </span>
          
          <span className="text-gray-100">•</span>
          <span className="year text-gray-100 font-medium">
            {release_date?.split("-")[0] || "N/A"}
          </span>
        </div>
      </div>
    </li>
  );
};