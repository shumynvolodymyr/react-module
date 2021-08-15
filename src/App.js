import './App.css';
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";

function App() {
    return (
        <div className={'app'}>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;
