import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../API/getCars";
import './Cars.css'

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars])


    return (
        <div className={'wrap'}>

            {
                cars.map(value => <Car key={value.id} car={value}/>)
            }
        </div>
    )
}