import {useEffect, useState} from "react";
import {getCars} from "../../API/getCars.api";
import Car from "../car/Car";
import './Cars.css'
import Form from "../form/Form";

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    return (
        <div className={'wrap'}>
            <div className={'form-box'}>
                <Form/>
            </div>
            <div className={'cars-box'}>
                <h1>CARS LIST</h1>{
                cars.map(value => <Car key={value.id} car={value}/>)
            }</div>
        </div>
    );
}