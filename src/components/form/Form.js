import {saveCar} from "../../API/postCar.api";
import {useState} from "react";

export default function Form() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    let onFormSubmit = (e) => {
        e.preventDefault();
        saveCar(formState);
    };

    let onFormChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    return (
        <div className={'form'}>
            <h1>ADD AUTO:</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'model'} placeholder={'Model'} maxLength={20} onChange={onFormChange}/>
                <input type="number" name={'price'} placeholder={'Price'} min={0} onChange={onFormChange}/>
                <input type="number" name={'year'} placeholder={'Year'} min={1990} max={2021} onChange={onFormChange}/>
                <input type="submit" name={'submit'} value={'SAVE'}/>
            </form>
        </div>
    );
}