import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setList([...list, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
