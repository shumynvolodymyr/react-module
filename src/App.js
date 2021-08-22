import './App.css';
import {createCar, getCar} from "./services/services/car.servise";
import {useEffect, useState} from "react";

function App() {

    let [cars, setCars] = useState([]);
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');


    const carInfo = {
        model: model,
        price: price,
        year: year
    }

    const save = (e) => {
        e.preventDefault()
        createCar(carInfo)
    }


    useEffect(() => {
        getCar().then(value => setCars([...value]))
    }, [cars])

    // console.log(cars)

    let onModelChange = (e) => {
        setModel(e.target.value)
    };
    let onPriceChange = (e) => {
        setPrice(e.target.value)
    };
    let onYearChange = (e) => {
        setYear(e.target.value)
    };

    return (
        <div className={'app'}>
            <form onSubmit={save}>
                <input type="text" name={'model'} placeholder={'Model'} onChange={onModelChange}/>
                <input type="number" name={'price'} placeholder={'Price'} onChange={onPriceChange}/>
                <input type="number" name={'year'} placeholder={'Year'} onChange={onYearChange}/>
                <input type="submit" name={'submit'} value={'SAVE'}/>
            </form>

            <h1>CARS:</h1>
            {
                cars.map(value => <div key={value.id}>
                    <h3>{value.id}. {value.model}</h3>
                </div>)
            }
        </div>
    );
}

export default App;
