import "./ListTasks.css";

import { TaskInfertace } from "../CreateTask/CreateTask";

import trashIcon from "../../assets/trash.svg";

export function ListTasks({ id, title, isComplete }: TaskInfertace) {
  return (
    <div>
      <div className="item">
        <div className="checkbox">
          <input name={title} type="checkbox" checked={isComplete} value={id} />
          <label htmlFor={title}>.</label>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="trash">
          <img src={trashIcon} alt="delete" width={24} />
        </div>
      </div>
    </div>
  );
}
