import "./App.css";
import { MainPage } from "./pages/main";
import { SettingsPage } from "./pages/settings";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { BuildHistoryPage } from "./pages/buildHystory";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((store) => store);
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">{user ? <BuildHistoryPage /> : <MainPage />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
