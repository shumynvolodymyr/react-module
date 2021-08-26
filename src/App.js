// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import './App.css';
import {useReducer} from "react";
import reducer from "./Reducer";

function App() {

    const initialCount = {a: 0, b: 0, c: 0}

    let [{a, b, c}, dispatch] = useReducer(reducer, initialCount);

    return (
        <div className={'wrap'}>

            <div className={'obj1'}>
                <button onClick={() => {dispatch({ obj: 'a',type: '-'})}}>-</button>
                <input name={'b'} type="text" value={a}/>
                <button onClick={() => {dispatch({ obj: 'a',type: '+'})}}>+</button>
            </div>

            <div className={'obj2'}>
                <button onClick={() => {dispatch({ obj: 'b',type: '-'})}}>-</button>
                <input name={'b'} type="text" value={b}/>
                <button onClick={() => {dispatch({ obj: 'b',type: '+'})}}>+</button>
            </div>

            <div className={'obj3'}>
                <button onClick={() => {dispatch({ obj: 'c',type: '-'})}}>-</button>
                <input name={'b'} type="text" value={c}/>
                <button onClick={() => {dispatch({ obj: 'c',type: '+'})}}>+</button>
            </div>

        </div>
    );
}

export default App;
