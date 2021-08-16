import './Car.css'
export default function Car({car: {id, model, price, year}}) {
    return (
        <div className={'car-box'}>
            <h3>{id}. {model}</h3>
            <p>
                Price: {price} <br/>
                Year: {year}
            </p>
        </div>
    );
}