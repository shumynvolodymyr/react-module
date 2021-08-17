import './PostForm.css'
import {useState} from "react";
import {postCar} from "../../API/postCar";

export default function PostForm() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    const onSubmitForm = (e) => {
        e.preventDefault();
    }

    const onInputForm = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }



    return (
        <div className={'post-edit-box'}>
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} maxLength={20} placeholder={'Model'} onInput={onInputForm}/> <br/>
                <input type="number" name={'price'} min={0} placeholder={'Price'} onInput={onInputForm}/> <br/>
                <input type="number" name={'year'} min={1990} max={2021} placeholder={'Year'} onInput={onInputForm}/>
                <br/>
                <button name={'save'} id={'btn'} onClick={() => {postCar(formState)}}>SAVE</button>
            </form>
        </div>
    );
}