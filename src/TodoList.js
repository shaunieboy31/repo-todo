import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const handleToggle = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">To Do List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {/* To Do Section */}
        <div className="bg-pink-200 rounded-2xl p-6 shadow-lg col-span-1 md:col-span-2 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">To Do List</h2>
          <div className="flex gap-2 mb-4">
            <input
              className="flex-1 p-2 rounded border border-pink-300"
              placeholder="Add a new task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-1 border-b border-pink-300"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(index)}
                  />
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  className="text-red-400 hover:text-red-600 text-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Notes Section */}
        <div className="bg-orange-200 rounded-2xl p-6 shadow-md col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Notes</h2>
          <textarea
            placeholder="Write your notes here..."
            className="w-full h-40 p-2 rounded border border-orange-300"
          ></textarea>
        </div>

        {/* Focus Section */}
        <div className="bg-teal-200 rounded-2xl p-6 shadow-md col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Focus</h2>
          <textarea
            placeholder="What's your main focus?"
            className="w-full h-32 p-2 rounded border border-teal-300"
          ></textarea>
        </div>

        {/* Remember Section */}
        <div className="bg-green-300 rounded-xl p-4 shadow-md col-span-1 md:col-span-2 lg:col-span-4">
          <h2 className="text-lg font-semibold text-white mb-2">Remember</h2>
          <p className="text-white text-sm">
            💡 Prioritize your top 3 tasks and don’t forget to take breaks!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
