import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Tasks.css";
import plusIcon from "../assets/plus.svg";
import clipboard from "../assets/clipboard.svg";

import { Task } from "./Task/Task";
import { Count } from "./Count/Count";

export interface TaskInfertace {
  id: string;
  title: string;
  isComplete: boolean;
  onDeleteTask?: (task: TaskInfertace) => void;
  onCheckTask?: (task: TaskInfertace) => void;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskInfertace[]>([]);
  const [newTask, setNewTask] = useState("");

  const doneTasks = tasks.filter((task) => task.isComplete).length;

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

    setTasks([...tasks, newTaskPayload]);
    setNewTask("");
  }

  function deleteTask(taskToDelete: TaskInfertace) {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  }

  function checkTask(taskToCheck: TaskInfertace) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskToCheck.id) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }

        return task;
      })
    );
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

      <Count
        key={"count"}
        concluidas={doneTasks}
        tarefasCriadas={tasks.length}
      />

      <div className="list">
        {!tasks.length && (
          <div className="noData">
            <img src={clipboard} />

            <p>
              <b>Você ainda não tem tarefas cadastradas</b> <br /> Crie tarefas
              e organize seus itens a fazer
            </p>
          </div>
        )}

        {tasks.map((task: TaskInfertace) => {
          return (
            <div>
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
                onDeleteTask={deleteTask}
                onCheckTask={checkTask}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
