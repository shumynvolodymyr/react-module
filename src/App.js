import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch,
} from "react-router-dom";
import MoviesListCard from "./components/moviesListCard/MoviesListCard";
import HomePage from "./components/homePage/HomePage";

function App() {

    return (
        <Router>

            <div>
                <Link to={'/'}/>

            </div>
            <Switch>
                <Route path={'/movie/:id'} component={MoviesListCard}/>
                <Route path={'/'} component={HomePage}/>

            </Switch>
        </Router>
    )
}

export default App;
