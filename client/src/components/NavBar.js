import React from "react";
import {useDarkMode} from "./hooks/useDarkMode";

 const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode_toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default NavBar;