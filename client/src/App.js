import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="app">
          <Routes>
            <Route path="/" element={<PrivateScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;

/*

<PrivateRoute path="/" element={<PrivateScreen />} />

*/
