import './Car.css'
export default function Car({car:{id, model, year, price}}) {
    return (
        <div className={'car-box'}>
          <h1>{id}. {model}</h1>
            <hr/>
            <p><i>Year: {year}</i></p>
            <p><i><b>Price:</b> {price}</i></p>
        </div>
    );
}
