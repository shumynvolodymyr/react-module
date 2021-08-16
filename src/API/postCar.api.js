const saveCar = (car) => {
    fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(value => value.json())
        .then(value => console.log(value))
}

export {saveCar};