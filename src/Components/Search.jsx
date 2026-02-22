
 import React from 'react';

export const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search w-full max-w-2xl mx-auto px-4">
      <div className="relative flex items-center bg-light-100/5 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all">
        <img 
          src="search.png" 
          alt="search" 
          className="absolute left-4 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none opacity-70" 
        />
        <input 
          type="text" 
          placeholder="Search thousands of movies..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent py-2 pl-10 pr-4 text-base sm:text-lg text-gray-100 placeholder-gray-400 outline-none"
          aria-label="Search movies"
        />
      </div>
    </div>
  );
};