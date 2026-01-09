import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="text-center animate-fadeIn">
        <div className="text-9xl mb-8 animate-bounce-slow">🍌</div>
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-6">Oops! Page Not Found</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have gone bananas! Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 btn-ripple"
          >
            Go Home
          </Link>
          <Link
            to="/products"
            className="bg-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 btn-ripple"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;