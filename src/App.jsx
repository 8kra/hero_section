import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="container m-auto p-4">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
