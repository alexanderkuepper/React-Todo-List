import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== '') {
      const id = uuidv4();
      setTodos([...todos, { key: id, text: todo }]);
      setTodo('');
    }
  };

  const deleteTodo = (key) => {
    const newTodos = todos.filter((todo) => {
      return todo.key !== key;
    });
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <h1>React Todo App</h1>

      <div className='input-wrapper'>
        <input
          type='text'
          name='todo'
          value={todo}
          placeholder='Create new todo'
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className='add-button' onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className='todo-list'>
        {todos.map((todo) => (
          <div className='todo' key={todo.key}>
            <li> {todo.text}</li>
            <button
              className='delete-button'
              onClick={() => {
                deleteTodo(todo.key);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
