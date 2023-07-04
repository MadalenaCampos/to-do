import "./App.css";
import rocketLogo from "./assets/rocket.svg";
import todoLogo from "./assets/todo.svg";

import { CreateTask } from "./components/CreateTask/CreateTask";
import { ListTasks } from "./components/ListTaks/ListTasks";

function App() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={rocketLogo} alt="logo" />
          <img src={todoLogo} alt="logo" />
        </div>
      </div>

      <CreateTask />

      <div className="task-list">
        <ListTasks
          id="sdasd-2313-sdfsf"
          title="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
          isComplete={true}
        />
        <ListTasks
          id="sdasd-2313-sdfsf"
          title="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
          isComplete={false}
        />
        <ListTasks
          id="sdasd-2313-sdfsf"
          title="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
          isComplete={true}
        />
      </div>
    </div>
  );
}

export default App;
