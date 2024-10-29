import TarefaItem from "./TarefaItem";

/* eslint-disable */
export default function ListaTarefas({ tarefas, marcarTarefa, deletarTarefa }) {
  return (
    <ul className="list-disc pl-5 space-y-4 gap-4 ">
      {tarefas.length === 0 && "Nenhuma tarefa adicionada"}
      {tarefas.map((tarefa) => {
        return (
          <TarefaItem
            deletarTarefa={deletarTarefa}
            marcarTarefa={marcarTarefa}
            {...tarefa}
            key={tarefa.id}
          />
        );
      })}
    </ul>
  );
}
