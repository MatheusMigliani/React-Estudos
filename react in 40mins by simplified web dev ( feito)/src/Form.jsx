/* eslint-disable react/prop-types */
import { useState } from "react";
export function Form({ onSubmit }) {
  const [novoItem, criarNovoItem] = useState("");

  function cuidarSubmit(e) {
    e.preventDefault();
    if (novoItem === "") {
      return alert("Por favor, adicione uma tarefa.");
    }

    onSubmit(novoItem);

    criarNovoItem("");

    alert("Tarefa adicionada com sucesso!");
  }
  return (
    <form
      onSubmit={cuidarSubmit}
      className="text-center text-blue-500 space-y-4"
    >
      <div className="flex flex-col items-center space-y-2">
        <label htmlFor="item" className="text-2xl font-bold text-gray-900">
          Novo item:
        </label>
        <input
          placeholder="Adicionar item"
          className="placeholder:text-center border-2 border-blue-400 rounded-md  shadow-sm focus:outline-none focus:ring-blue-500  focus:border-blue-500 text-xl w-full"
          type="text"
          onChange={(e) => criarNovoItem(e.target.value)}
          value={novoItem}
          id="item"
        />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Adicionar
          </span>
        </button>
      </div>
    </form>
  );
}
