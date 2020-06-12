import React from "react";
import { useAuth } from "../auth/AuthContext";
import userManager from "../auth/userManager";
import { Link } from "react-router-dom";

export default function Home(props) {
  const user  = useAuth();
  const login = () => {
    userManager.signinRedirect();
  };

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, world!</h1>
        <p>
          This is a template for a simple login/register system. It includes the
          OpenID Connect Implicit Flow. To view Profile page please
          login.
        </p>
        <p>
          {(() => {
            if (user) {
              return (
                <Link
                  className="btn btn-success btn-lg"
                  to="/profile"
                >
                  View Profile &raquo;
                </Link>
              );
            } else {
              return (
                <button className="btn btn-primary btn-lg" onClick={login}>
                  Login/Register &raquo;
                </button>
              );
            }
          })()}
        </p>
      </div>
    </div>
  );
}
