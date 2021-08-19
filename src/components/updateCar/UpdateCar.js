import {getCarID} from "../../API/getCarID";
import {useState} from "react";
import {putCar} from "../../API/putCar";
import './UpdateCar.css'

export default function UpdateCar({cars}) {

    let [car, setCar] = useState({model: '', price: '', year: ''});

    const changeCar = (e) => {
        getCarID(e.target.value).then(value => setCar({...value}))
    };

    const save = (e) => {
        e.preventDefault()
        putCar(car);
    }

    const changeForm = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    };
    return (
        <div className={'update-box'}>
            <div className={'select-box'}>

                <select name="car" onChange={changeCar}>

                    {cars.map(value => <option key={value.id} value={value.id}> {value.id}. {value.model} </option>)}

                </select>
            </div>

            <div className={'update-car-box'}>

                <form onSubmit={save}>

                    <input type="text" name={'id'} value={car.id} placeholder={'ID'} onChange={changeForm}/> <br/>
                    <input type="text" name={'model'} value={car.model} maxLength={20} placeholder={'Model'} onChange={changeForm}/> <br/>
                    <input type="number" name={'year'} value={car.year} min={1990} max={2021} placeholder={'Year'} onChange={changeForm}/> <br/>
                    <input type="number" name={'price'} min={0} value={car.price} placeholder={'Price'} onChange={changeForm}/> <br/>
                    <input type="submit" name={'update'} value={'Update'} id={'btn'}/>
                </form>

            </div>

        </div>
    );
}
