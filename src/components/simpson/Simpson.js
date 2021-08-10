import './Simpson.css'

export default function Simpson(props) {
    const {name, surname, age, info, photo} = props;
    return (
        <div className={'simpson'}>
            <h1>{name} {surname}.</h1>
            <h5>Age: {age}</h5>
            <p>{info}</p>
            <img src={photo} alt=""/>
        </div>
    );
}