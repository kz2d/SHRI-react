import "./App.css";
import { MainPage } from "./pages/main";
import { SettingsPage } from "./pages/settings";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { BuildHistoryPage } from "./pages/buildHystory";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <SettingsPage setUser={setUser} />
        </Route>
        <Route path="/">{user ? <BuildHistoryPage /> : <MainPage />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
