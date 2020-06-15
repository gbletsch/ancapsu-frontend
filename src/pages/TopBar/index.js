import React from "react";

import "./Style.css";

function TopBar() {
  return (
    <header className="header">
      <a href="/">
        Logo
      </a>
      <nav>
        <ul className="menu">
          <li>
            <a href="/">videos</a>
          </li>
          <li>
            <a href="/">artigos</a>
          </li>
          <li>
            <a href="/">pautas</a>
          </li>
          <li>
            <a href="/">minha conta</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TopBar;
