
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold mb-4">EcoTrack Waste Reporting</h1>
    <p className="text-lg mb-6">
      Report waste issues quickly and help keep your community clean.
    </p>

    <Link to="/report">
      <button className="bg-green-600 text-white px-6 py-3 rounded">
        Report Waste
      </button>
    </Link>
  </div>
);

export default Landing;
