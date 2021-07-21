import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Starships from "./Pages/Starships/Starships";
import People from "./Pages/People/People";
import Vehicles from "./Pages/Vehicles/Vehicles";
import Species from "./Pages/Species/Species";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/starships">
            <Starships />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/vehicles">
            <Vehicles />
          </Route>
          <Route exact path="/species">
            <Species />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
