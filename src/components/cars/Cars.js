import Car from "../car/Car";
import './Cars.css'

export default function Cars({cars}) {

    return (
        <div className={'cars-box'}>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
}
