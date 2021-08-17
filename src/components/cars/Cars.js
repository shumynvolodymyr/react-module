import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../API/getCars";
import './Cars.css'
import PostForm from "../form/PostForm";

export default function Cars({edit}) {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars])


    return (
        <div>
            <div className={'post-box'}>
                <PostForm/>
            </div>

            <div className={'cars-box'}>
                {
                    cars.map(value => <Car key={value.id} car={value} edit={edit}/>)
                }
            </div>
        </div>

    )
        ;
}