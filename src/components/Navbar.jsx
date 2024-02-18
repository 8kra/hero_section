import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold ">ANGRY</h1>
      <div className="flex space-x-5 items-center">
        <ul className="hidden md:flex items-center space-x-4 xl:space-x-8">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>About</li>
        </ul>
        <button className="px-5 py-2 border-2 rounded-lg">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
