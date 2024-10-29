import { useEffect, useState } from "react";
import { Form } from "./Form";
import ListaTarefas from "./ListaTarefas";

export default function App() {
  const [tarefas, criarTarefa] = useState(() => {
    const ValorLocal = localStorage.getItem("tarefas");
    if (ValorLocal === null) return [];
    return JSON.parse(ValorLocal);
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function AddTarefa(title) {
    criarTarefa((tarefaAtual) => {
      return [
        ...tarefaAtual,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function marcarTarefa(id, completed) {
    criarTarefa((tarefaAtual) => {
      return tarefaAtual.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, completed: completed };
        }

        return tarefa;
      });
    });
  }

  function deletarTarefa(id) {
    criarTarefa((tarefaAtual) => {
      return tarefaAtual.filter((tarefa) => tarefa.id !== id);
    });
    alert("Tarefa removida com sucesso!");
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen flex-col">
        <Form onSubmit={AddTarefa} />
        <div className="flex flex-col justify-center text-center items-center space-y-2">
          <h1 className="text-center text-4xl text-purple-500">
            tarefa pra fazer
          </h1>
          <ListaTarefas
            tarefas={tarefas}
            marcarTarefa={marcarTarefa}
            deletarTarefa={deletarTarefa}
          />
        </div>
      </div>
    </>
  );
}
