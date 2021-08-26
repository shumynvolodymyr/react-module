// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через redcer

import './App.css';
import {useReducer} from "react";
import reducer from "./reducer";

function App() {

    let [state, dispatch] = useReducer(reducer, 0);

    return (
        <div className={'wrapper'}>
            <button id={'minus'} onClick={() => dispatch({type: '-'})}>-2</button>
            <h1>{state}</h1>
            <button id={'plus'} onClick={() => dispatch({type: '+'})}>+10</button>
            <button onClick={()=>dispatch({type: 'reset'})}>RESET</button>
        </div>
    );
}

export default App;
