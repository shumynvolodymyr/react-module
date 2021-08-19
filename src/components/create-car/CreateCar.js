import {useState} from "react";
import {postCar} from "../../API/postCar";
import './CreateCar.css'

export default function CreateCar() {

    let [stateForm, setStateForm] = useState({model: '', year: '', price: ''});

    const clickOnSubmit = (e) => {
        e.preventDefault();
        setStateForm({
            ...stateForm,
            model: e.target.model.value,
            year: e.target.year.value,
            price: e.target.price.value
        })
        postCar(stateForm)
    };

    return (
        <div className={'create-car'}>
            <form onSubmit={clickOnSubmit}>
                <input type="text" name={'model'} maxLength={20} placeholder={'Model'}/> <br/>
                <input type="number" name={'year'} min={1990} max={2021} placeholder={'Year'}/> <br/>
                <input type="number" name={'price'} min={0} placeholder={'Price'}/> <br/>
                <input type="submit" id={'submit'} name={'submit'} value={'Save'} />
            </form>
        </div>
    );
}
