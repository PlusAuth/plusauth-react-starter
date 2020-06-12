import React from "react";
import userManager from "../auth/userManager";
import { Redirect } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Unauthorized(props) {
  const user = useAuth();
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (user) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button
        className="btn btn-primary"
        onClick={() => userManager.signinRedirect()}
      >
        Log in
      </button>
    </div>
  );
}
