import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Tasks.css";
import plusIcon from "../assets/plus.svg";

export interface TaskInfertace {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Tasks() {
  const [Taks, setTask] = useState<TaskInfertace[]>([]);
  const [NewTask, setNewTask] = useState("");

  function handleNewTaks(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: NewTask,
      isComplete: false,
    };

    console.log(newTask);

    setTask([...Taks, newTask]);
    setNewTask("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="task"
          onChange={handleNewTaks}
          value={NewTask}
          required
        />
        <button type="submit">
          Criar <img src={plusIcon} />
        </button>
      </form>
    </div>
  );
}
