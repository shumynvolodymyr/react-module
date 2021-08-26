import './App.css';
import {useState} from "react";
import Task from "./components/Task";

let task = [
    {id: 0, title: 'Create todo', done: false},
    {id: 1, title: 'make video', done: true},
    {id: 2, title: 'create video', done: false},
];

function App() {
    let [state, setState] = useState(task);
    const activeTasks = state.filter(value => !value.done);
    const doneTasks = state.filter(value => value.done);


    const doneTask = (id) => {
        let searchDoneTask = state.filter(value => value.id === id)
        searchDoneTask[0].done = true;
        setState([...state, searchDoneTask]);
    }
    const deleteTask = (id) => {
        let searchDeleteTask = state.filter(value => value.id === id)
        searchDeleteTask[0].done = false;
        setState([...state, searchDeleteTask]);
    }


    return (
        <div className={'App'}>
            <h1 className={'top'}> Activate tasks: {activeTasks.length}</h1>
            {
                [...activeTasks, ...doneTasks].map(value =>
                    <Task
                        key={value}
                        task={value}
                        doneTask={doneTask}
                        deleteTask={deleteTask}
                    />)
            }
        </div>
    );
}

export default App;
