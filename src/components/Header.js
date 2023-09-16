import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 text-white text-center flex gap-9">
      <h1 className="text-2xl font-semibold ml-24">Resume Builder</h1>
      {/* Navigation Links */}
      <nav className="mt-2">
        <a href="#" className="text-white hover:underline mr-4">Home</a>
        <a href="#" className="text-white hover:underline">About</a>
      </nav>
    </header>
  );
};

export default Header;
