// IP с дома 195.72.146.25
// IP в офисе 192.168.1.253
//
//
// Є наступні лінки, та дії закріплені за ними
// /cars - отримати всі автівки та вивести їх
// /create-car - сторінка з формою створення нового авто
// Додатково
// /update-car - сторінка з двома формами - 1 форма з select, в якій  можна обрати яку автівку редагувати. Після вибору
// поточні данні про авто з'являються на другій формі, пілся редагування яких і відправки автівка оновлюється на сервері.

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CreateCar from "./components/create-car/CreateCar";
import UpdateCar from "./components/updateCar/UpdateCar";
import {useEffect, useState} from "react";
import {getCars} from "./API/getCars";

function App() {

    let [cars, setCars] = useState([]);

    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    },[cars])

    return (
        <Router>
            <div className={'wrap'}>
                <Link to={'/cars'}>Cars</Link>
                <Link to={'/create-car'}>Create-car</Link>
                <Link to={'/update-car'}>Update-car</Link>
            </div>

            <Route path={'/cars'} render={()=> <Cars cars={cars}/>}/>
            <Route path={'/create-car'} render={()=> <CreateCar/>}/>
            <Route path={'/update-car'} render={()=> <UpdateCar cars={cars}/>}/>

        </Router>
);
}

export default App;
