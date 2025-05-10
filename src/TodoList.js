import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState(""); // State for deadline

  const handleAdd = () => {
    if (!input.trim()) return;
    const newTask = {
      text: input,
      completed: false,
      timestamp: new Date().toLocaleString(),
      deadline: deadline, // Store the deadline
    };
    setTodos([...todos, newTask]);
    setInput("");
    setDeadline(""); // Clear the deadline after adding the task
  };

  const handleToggle = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Format the deadline into a more formal format
  const formatDeadline = (deadline) => {
    if (!deadline) return "";
    const date = new Date(deadline);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return `Due on: ${date.toLocaleDateString('en-US', options)}`;
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-12 font-sans">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">To Do List</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {/* Left: To Do Input + List */}
        <div className="bg-pink-200 rounded-2xl p-8 shadow-xl flex flex-col">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Add Task</h2>
          <div className="flex flex-col gap-4 mb-6">
            <input
              className="p-4 rounded border border-pink-300 text-lg"
              placeholder="Enter a new task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              type="datetime-local"
              className="p-4 rounded border border-pink-300 text-lg"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)} // Set deadline
            />
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 text-lg"
              onClick={handleAdd}
            >
              Add Task
            </button>
          </div>

          <ul className="space-y-4">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-4 border-b border-pink-300"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(index)}
                    className="text-lg"
                  />
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-400" : "text-gray-700"
                    } text-lg`}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {todo.deadline && <span>{formatDeadline(todo.deadline)}</span>}
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

        {/* Middle: Upcoming Tasks */}
        <div className="bg-purple-200 rounded-2xl p-8 shadow-xl flex flex-col">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Upcoming Tasks</h2>
          <ul className="space-y-4">
            {todos.filter((t) => !t.completed).length === 0 ? (
              <li className="text-gray-500 italic text-lg">No upcoming tasks.</li>
            ) : (
              todos
                .filter((t) => !t.completed)
                .map((todo, idx) => (
                  <li key={idx} className="text-lg text-gray-800">
                    • {todo.text}{" "}
                    <span className="text-xs text-gray-600 block">{todo.timestamp}</span>
                    <span className="text-xs text-gray-500 block">
                      {todo.deadline && formatDeadline(todo.deadline)}
                    </span>
                  </li>
                ))
            )}
          </ul>
        </div>

        {/* Right: Focus + Reminder */}
        <div className="flex flex-col gap-8">
          <div className="bg-teal-200 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Focus</h2>
            <textarea
              placeholder="What's your main focus?"
              className="w-full h-48 p-4 rounded-lg border border-teal-300 text-lg"
            ></textarea>
          </div>

          <div className="bg-green-300 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Remember</h2>
            <p className="text-white text-lg">
              💡 Prioritize your top 3 tasks and take breaks often!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
