import React from "react";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div>
      <div className="pt-4">
        <h1 className="text-xl text-center font-bold p-2">
          Welcome to Ganpat University Campus
        </h1>
        <h1 className="text-center px-2 pt-2 pb-6">
          Explore our university campus and discover all the amazing places it
          has to offer.
        </h1>

        <center>
          {/* Use Link component to navigate to Explore page */}
          <Link to="/explore">
            <button className="bg-black text-white border-white border rounded-lg font-bold py-2 px-4 hover:bg-slate-900">
              Start Exploring
            </button>
          </Link>
        </center>
      </div>

      <div className="p-5">
        <center>
          <img src="./guni_main.jpg" className="max-h-52" alt="main"></img>
          <h1 className="text-2xl font-bold p-2">Main Building</h1>
          <h3 className="text-lg p-2">
            The heart of our campus, where all the administrative offices are
            located.
          </h3>
          {/* You can also add Link component for the "Visit" button if needed */}
          {/* <Link to="/explore">
            <button className="bg-black text-white border-white border rounded-lg font-bold py-2 px-4 hover:bg-slate-900">
              Visit
            </button>
          </Link> */}
        </center>
      </div>
    </div>
  );
}

export default Herosection;
