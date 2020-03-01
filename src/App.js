import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import { Button } from "semantic-ui-react";

const App = function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
};

const Child = function Child() {
  let { id } = useParams();

  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  useEffect(() => {
    console.log("useEffect Fired");
  });

  let button;
  if (id !== "home") {
    button = <Button onClick={handleClick}>Go home</Button>;
  } else {
    button = null;
  }

  return (
    <>
      {id}
      {button}
    </>
  );
};

exports.App = App;
