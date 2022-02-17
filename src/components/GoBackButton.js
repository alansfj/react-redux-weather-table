import React from "react";
import { Link } from "react-router-dom";

export const GoBackButton = () => {
  return (
    <div className="go-back-btn-container">
      <Link to="/">
        <button type="button" className="btn btn-primary">
          Regresar
        </button>
      </Link>
    </div>
  );
};
