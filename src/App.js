import {useState} from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {

    let [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
if(userInput) {
    const newItem = {
      id: uuidv4(),
        title: userInput.title,
        description: userInput.description,
        complete: false
    }
    setTodos([...todos, newItem])
}
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const handleToggle = (id) => {
setTodos([...todos.map(value => value.id===id ? {...value,complete: !value.complete} : {...value})])
    }

    return (
        <div className={'App'}>
            <header>
                <h1>Список завдань: {todos.length}</h1>
            </header>
            <TodoForm addTask={addTask}/>

            {
                todos.map(value =>
                    <Todo
                        key={value.id}
                        todo={value}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />)
            }

        </div>
    );
}

export default App;
