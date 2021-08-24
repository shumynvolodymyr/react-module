// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію отримувати через history.state

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Users from "./componenets/users/Users";
import Posts from "./componenets/posts/Posts";
import Comments from "./componenets/comments/Comments";
import UserDetails from "./componenets/users/userDetails/UserDetails";

function App() {
    return (
        <Router>
            <div className={'menu-wrapper'}>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <Switch>
                < Route path={`/users/:id`} render={(props) => {
                    return <UserDetails {...props}/>
                }}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
            </Switch>

        </Router>
    )

}

export default App;
