// src/components/Header.js
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-gray-800 p-4 shadow-md fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
      <nav className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">
          MoviesDB
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link to="/favmovies" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Favourites</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
