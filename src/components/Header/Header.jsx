import React, { useEffect, useState } from "react";

import "./header.scss";

const Brand = () => (
  <div className="brand">
    <img
      src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png"
      alt="neflix_logo"
      height="60px"
    ></img>
  </div>
);

const NavigationItem = ({ name }) => (
  <div className="navigation-item">
    <li>
      <a href="#">{name}</a>
    </li>
  </div>
);

const Navigation = ({ children }) => (
  <div className="navigation">
    <ul>{children}</ul>
  </div>
);

const Header = () => {
  const NavigationItems = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
  ];

  const [search, setSearch] = useState(false);

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("sroll", transitionNavBar);
  }, []);

  return (
    <div
      className={`header-container ${show ? "nav-black" : "nav-transparent"}`}
    >
      <Brand></Brand>
      <Navigation>
        {NavigationItems.map((item) => (
          <NavigationItem key={item} name={item} />
        ))}
      </Navigation>
      <div className="secondary-nav">
        <div className={"search-container" + (search ? " active" : "")}>
          <div className="search-icon" onClick={() => setSearch(!search)}>
            <svg
              id="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              style={{ fill: "#ffffff" }}
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </div>

          <input
            type="text"
            className={`search-input` + (search ? " active" : "")}
            placeholder="Search"
            placeholder="Titles, people, genres"
          ></input>
        </div>
        <img
          className="profile_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export { Header };
