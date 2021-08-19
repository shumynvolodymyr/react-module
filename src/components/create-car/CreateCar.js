import {useState} from "react";
import {postCar} from "../../API/postCar";
import './CreateCar.css'

export default function CreateCar() {

    let [stateForm, setStateForm] = useState({model: '', year: '', price: ''});

    const clickOnSubmit = (e) => {
        e.preventDefault();
        postCar(stateForm)
    };

    let changeForm=(e)=>{
        setStateForm({...stateForm,[e.target.name]: e.target.value})
    };
    return (
        <div className={'create-car'}>
            <form onSubmit={clickOnSubmit}>
                <input type="text" name={'model'} maxLength={20} placeholder={'Model'} onChange={changeForm}/> <br/>
                <input type="number" name={'year'} min={1990} max={2021} placeholder={'Year'} onChange={changeForm}/> <br/>
                <input type="number" name={'price'} min={0} placeholder={'Price'} onChange={changeForm}/> <br/>
                <input type="submit" id={'submit'} name={'submit'} value={'Save'} />
            </form>
        </div>
    );
}
