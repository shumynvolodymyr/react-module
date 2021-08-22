const getCar = () => {
    return fetch('http://91.201.233.14/api/v1/cars').then(value => value.json())
}

const createCar = (carInfo) => {
    fetch('http://91.201.233.14/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(carInfo),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(value => value.json())
        .then(value => console.log(value))
}

export {createCar, getCar};
