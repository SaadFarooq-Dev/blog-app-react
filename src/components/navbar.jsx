import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routes/routesPath";

const NavBar = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
          <Link
            to={ROUTES.Posts}
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            Blog App
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={ROUTES.Posts} className="nav-link px-2 text-secondary">
                Welcome
              </Link>
            </li>
            <li>
              <Link to={ROUTES.Posts} className="nav-link px-2 text-white">
                Posts
              </Link>
            </li>
            <li>
              <Link to={ROUTES.Posts} className="nav-link px-2 text-white">
                Suggestions
              </Link>
            </li>
            <li>
              <Link to={ROUTES.Posts} className="nav-link px-2 text-white">
                Reports
              </Link>
            </li>
            <li>
              <Link to={ROUTES.Posts} className="nav-link px-2 text-white">
                Manage Posts
              </Link>
            </li>
            <li>
              <Link to={ROUTES.Posts} className="nav-link px-2 text-white">
                Edit Profile
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <button className="btn btn-outline-light me-2">Sign In</button>
            <button className="btn btn-outline-warning me-2">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
