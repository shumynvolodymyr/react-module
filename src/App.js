import './App.css';
import {
    Route,
    Switch,
} from "react-router-dom";
import MoviesListCard from "./components/moviesListCard/MoviesListCard";
import HomePage from "./components/homePage/HomePage";
import Layout from "./components/layout/Layout";

function App() {

    return (
        <Layout>
            <Switch>
                <Route path={'/movie/:id'} component={MoviesListCard}/>
                <Route path={'/'} component={HomePage}/>

            </Switch>
        </Layout>

    )
}

export default App;
