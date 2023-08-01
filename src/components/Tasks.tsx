import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Tasks.css";
import plusIcon from "../assets/plus.svg";

import { Task } from "./Task/Task";
import { Count } from "./Count/Count";

export interface TaskInfertace {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Tasks() {
  const [tasks, setTask] = useState<TaskInfertace[]>([]);
  const [newTask, setNewTask] = useState("");

  const tasksCount = tasks.length;

  function handleNewTaks(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();

    const newTaskPayload = {
      id: uuidv4(),
      title: newTask,
      isComplete: false,
    };

    setTask([...tasks, newTaskPayload]);
    setNewTask("");
  }

  return (
    <div className="tasksContent">
      <form className="form" onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="task"
          onChange={handleNewTaks}
          value={newTask}
          required
        />
        <button type="submit">
          Criar <img src={plusIcon} />
        </button>
      </form>

      <Count key={"count"} concluidas={10} tarefasCriadas={tasksCount} />

      <div className="list">
        {tasks.map((task: TaskInfertace) => {
          return (
            <div>
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
