import {saveCar} from "../../API/postCar.api";

export default function Form() {

    let onFormSubmit = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        saveCar(carToSave);
    };

    return (
        <div className={'form'}>
            <h1>ADD AUTO:</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'model'} placeholder={'Model'} maxLength={20}/>
                <input type="number" name={'price'} placeholder={'Price'} min={0}/>
                <input type="number" name={'year'} placeholder={'Year'} min={1990} max={2021}/>
                <input type="submit" name={'submit'} value={'SAVE'}/>
            </form>
        </div>
    );
}