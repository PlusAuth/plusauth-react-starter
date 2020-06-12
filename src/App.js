import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import AuthContext from "./auth/AuthContext";
import PrivateRoute from "./helpers/PrivateRoute";
import userManager from "./auth/userManager";
import Unauthorized from "./components/Unauthorized";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    userManager.getUser().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Router>
        <div className="App">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Switch>
                  <PrivateRoute
                    path="/profile"
                    component={Profile}
                  ></PrivateRoute>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/unauthorized" component={Unauthorized}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
