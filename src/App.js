// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div className={'wrapper'}>
                <Link to={'/users-page'}>Users page</Link>
                <Link to={'/posts-page'}>Posts page</Link>
                <Link to={'/comments-page'}>Comments page</Link>
            </div>
            <Switch>
                <Route path={'/users-page'} component={Users}/>
                <Route path={'/posts-page'} component={Posts}/>
                <Route path={'/comments-page'} component={Comments}/>
            </Switch>
        </Router>
    );
}

export default App;
