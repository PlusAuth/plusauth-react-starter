import React from "react";
import { useAuth } from "../auth/AuthContext";

export default function Profile() {
  const user = useAuth();

  return (
    <div className="container">
      <h3>Welcome {user.profile.username} !</h3>
      <pre>User object: {JSON.stringify(user, null, 2)} </pre>
    </div>
  );
}
