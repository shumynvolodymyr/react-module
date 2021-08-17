import {saveCar} from "../../API/postCar.api";
import {useState} from "react";

export default function Form() {

 let [formState, setFormState] = useState({model:'', price:'', year:''});

    let onFormSubmit = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        saveCar(carToSave);
    };

    function onFormChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    return (
        <div className={'form'}>
            <h1>ADD AUTO:</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'model'} value={formState.model} placeholder={'Model'} maxLength={20} onChange={onFormChange}/>
                <input type="number" name={'price'} value={formState.price} placeholder={'Price'} min={0} onChange={onFormChange}/>
                <input type="number" name={'year'} value={formState.year} placeholder={'Year'} min={1990} max={2021} onChange={onFormChange}/>
                <input type="submit" name={'submit'} value={'SAVE'}/>
            </form>
        </div>
    );
}