
import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross1} from 'react-icons/rx';
import 'flowbite';
import Drawer from './Drawer';



const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <>
      <header className="bg-blue-500 py-4 text-white text-center flex gap-9">
        <h1 className="text-2xl font-semibold ml-24">Resume Builder</h1>
        {/* Navigation Links */}
        <nav className="mt-2">
          <a href="#" className="text-white hover:underline mr-4">Home</a>
          
          <a href="#" className="text-white hover:underline">About</a>
        </nav>
        <button className='mt-2 ml-auto mr-4' onClick={toggleDrawer}>
          <div >
          {
            showDrawer ? (
              <RxCross1 className='h-6 w-6'/>
            ) : (
              <RxHamburgerMenu className='h-6 w-6'/>
            )
          }
          </div>
          </button>

      </header>


      <Drawer show={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default Header;
