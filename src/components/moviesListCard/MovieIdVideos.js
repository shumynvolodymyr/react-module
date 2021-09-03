import ReactPlayer from "react-player";
import './MovieIdVideos.css'
import {searchVideoKey} from "../../myFunc/searchVideoKey";

export default function MovieIdVideos({results}) {

    let key = [];
    searchVideoKey(results, key);

    return (
        <div className={'player-wrapper'}>
            <ReactPlayer
                className='react-player'
                url={`https://www.youtube.com/watch?v=${key}`}
            />
        </div>
    );
}
