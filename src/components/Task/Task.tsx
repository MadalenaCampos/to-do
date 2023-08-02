import "./Task.css";

import { TaskInfertace } from "../Tasks";

import trashIcon from "../../assets/trash.svg";

import Checkbox from "@mui/material/Checkbox";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

export function Task({ id, title, isComplete, onDeleteTask }: TaskInfertace) {
  function handleDeleteTask() {
    if (onDeleteTask) {
      onDeleteTask({ id, title, isComplete });
    }
  }

  return (
    <div className="task">
      <div className="checked">
        <Checkbox
          value={id}
          checked={isComplete}
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle />}
          sx={{
            color: "var(--blue)",
            "&.Mui-checked": {
              color: "var(--purple-dark)",
            },
          }}
        />
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="delete" onClick={handleDeleteTask}>
        <img src={trashIcon} width={28} />
      </div>
    </div>
  );
}
