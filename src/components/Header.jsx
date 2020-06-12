import React, { Fragment } from "react";
import { useAuth } from "../auth/AuthContext";
import userManager from "../auth/userManager";
import { Link } from "react-router-dom";

export default function Header(props) {
  const user  = useAuth();
  

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          Plusauth Starter
        </a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto"></ul>
          {(() => {
            if (user) {
              return (
                <Fragment>
                  <li className="nav-item navbar-nav">
                    <Link className="nav-link" to="/profile">
                      {`Logged in as: ${user.profile.username}`}
                    </Link>
                  </li>
                  <button className="btn btn-link" onClick={()=>userManager.signoutRedirect()}>
                    Logout
                  </button>
                </Fragment>
              );
            } else {
              return (
                <Fragment>
                  <li className="nav-item navbar-nav">
                  <button className="btn btn-link" onClick={()=>userManager.signinRedirect()}>
                    Login
                  </button>
                  </li>
                </Fragment>
              );
            }
          })()}
        </div>
      </nav>
    </header>
  );
}
