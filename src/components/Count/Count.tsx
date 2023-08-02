import "./Count.css";

interface CountProps {
  tarefasCriadas: number;
  concluidas: number;
}

export function Count({ tarefasCriadas, concluidas }: CountProps) {
  return (
    <div className="countContent">
      <p>
        Tarefas criadas <span>{tarefasCriadas | 0}</span>
      </p>

      {(tarefasCriadas > 0 && (
        <p>
          Concluídas{" "}
          <span>
            {concluidas | 0} de {tarefasCriadas}
          </span>
        </p>
      )) || (
        <p>
          Concluídas <span>{concluidas | 0}</span>
        </p>
      )}
    </div>
  );
}
