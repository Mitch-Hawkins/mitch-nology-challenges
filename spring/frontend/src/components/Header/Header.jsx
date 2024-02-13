import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Blog Posts!
      </h1>
    </div>
  );
};

export default Header;
