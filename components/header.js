// -------------Header.js---------

import { useState } from "react";
import { Link } from "react-router";
export const Header = () => {
  const [btnLogin, setbtn] = useState("Login");
  return (
    <div id="navBar">
      <div className="logoImg">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjfKjJzYDSg-Vs7tKEone1PMavMkl-C3PPw&s"
        ></img>
      </div>
      <div className="navLink">
        <ul>
          <Link to="./">
            <li>Home</li>
          </Link>
          <Link to="./about">
            <li>About</li>
          </Link>
          <Link to="./contact">
            <li>Contact-Us</li>
          </Link>

          <button
            onClick={() => {
              btnLogin === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
