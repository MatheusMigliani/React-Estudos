/* eslint-disable */
export default function TarefaItem({ completed, id, title, marcarTarefa, deletarTarefa }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <label htmlFor="item1" className="flex items-center space-x-2">
        <input
          onChange={(e) => marcarTarefa(id, e.target.checked)}
          checked={completed}
          type="checkbox"
          name="item1"
          id="item1"
          className="form-checkbox"
        />
        <span className="text-lg font-semibold text-gray-700">{title}</span>
      </label>
      <button
        onClick={() => deletarTarefa(id)}
        className="border-red-400 border text-red-400 font-bold py-2 px-2 rounded-md hover:bg-red-400 hover:text-white transition duration-200"
        value="delete"
      >
        Delete
      </button>
    </li>
  );
}
