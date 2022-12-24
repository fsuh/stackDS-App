import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () =>{
    setTodoList([...todoList, todo])
    setTodo('')
  }

  const removeTask = () =>{
    const newTodos =[...todoList];
    newTodos.pop()
    setTodoList(newTodos)

  }

  return (
    <div className="App">
    <h1>Stack List</h1>
      <div>
        {todoList.map(e => (
          <p key={e}>{e}</p>
        ))}
      </div>
      <input
        type="text"
        value={todo}
        placeholder="type here..."
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <button onClick={removeTask}>Pop</button>
      <p>Top List Item(firstIn): {todoList[0]}</p>
      <p>Stack Size: {todoList.length}</p>


    </div>
  );
}

export default App;
