import React, {useState} from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      Input todo-item
      <form onSubmit={(e) => {
          setTodos([{text: e.target.todoInput.value, completed: true}].concat(todos));
          e.target.todoInput.value = "";
          e.preventDefault();
        }}>
        <input type="text" name="todoInput" />
        <input type="submit" />
      </form >
      <div>
        {todos.map((todo,key) => {
          return (
            <>
              <h1 key={key}>{todo.text}</h1>
                <input type="checkbox" checked={todo.completed}/>
            </>
          );
        })}
      </div>
      <input type="button" value="reset" onClick={() => setTodos([])}/>


    </>
  );
}

export default App;
