import './Car.css'
import {deleteCar} from "../../API/deleteCar";
import {putCar} from "../../API/putCar";

export default function Car({car:{id, model, price, year}, edit}) {

    const delCar = () => {
        deleteCar(id);
    }

    const editCar = () => {
        edit(id, model, price, year);
    }

    return (
        <div className={'car-box'}>
            <div className={'description-car-box'}>
                <h3>{id}. {model}</h3>
                <p>
                    Price: {price}<br/>
                    Year: {year}
                </p>
            </div>

            <div className={'btn-box'}>
                <button id={'deleteButton'} onClick={delCar}>DELETE</button>
                <button id={'editButton'} onClick={editCar}>EDIT</button>
            </div>
        </div>
    );
}