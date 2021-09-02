import {useHistory} from "react-router";
import './MoviesListCard.css'
import {ImageBuilder} from "../../myFunc/ImageBuilder";

export default function MoviesListCard() {

    const history = useHistory();
    const {
        location: {
            state: {
                poster_path,
                original_title,
                release_date,
                genre_ids,
                overview
            }
        }
    } = history;

    console.log(history);

    return (
        <>
            <button className={'goBack'} onClick={()=>history.goBack()}>Back</button>
            <div id={'face'}>
                <img className={'img'} src={ImageBuilder(poster_path, 300)} alt=""/>
                <div className={'t-row'}>
                    <div className={'r-1'}>
                        <div className={'r1-1'}>Original title:</div>
                        <div className={'r1-2'}><h1>{original_title}</h1></div>
                    </div>
                    <div className={'r-2'}>
                        <div className={'r1-1'}>Release date:</div>
                        <div className={'r1-2'}><h3>{release_date}</h3></div>
                    </div>

                    <div className={'r-1'}>
                        <div className={'r1-1'}>Genre:</div>
                        <div className={'r1-2'}><h3>{genre_ids}</h3></div>
                    </div>
                    <div className={'r-2'}>
                        <div className={'r1-1'}>Overview:</div>
                        <div className={'r1-2'}><h4><i>{overview}</i></h4></div>
                    </div>
                </div>
            </div>
        </>
    );
}
