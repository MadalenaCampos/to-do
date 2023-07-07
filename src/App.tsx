import "./App.css";
import rocketLogo from "./assets/rocket.svg";
import todoLogo from "./assets/todo.svg";

import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={rocketLogo} alt="logo" />
          <img src={todoLogo} alt="logo" />
        </div>
      </div>

      <Tasks />
    </div>
  );
}

export default App;
