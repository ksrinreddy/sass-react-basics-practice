import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <p className="error-text">no such page exists</p>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
