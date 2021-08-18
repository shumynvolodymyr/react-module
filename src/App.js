// сверху страницы у вас должна быть форма для записи/редактирования машин
// под формой должны выводится машинки
// у каждой машинки должно быть 2 кнопки delete и edit:
//     - по нажатии на кнопку delete машина должна удалятся с базы данных и со списка выведенных машин
// - по нажатии на кнопку edit, форма должна заполнится данными выбранной машины с последующим обновлением и сохранением в базу данных
//
// документация и API обновлена и находится по одной их ссылок:
//     http://195.72.146.25/
//         http://192.168.1.253/
//
//
//             Створити форму з select.
//     Отримати всіх юзерів з плейсхолдеру. option для кожного юзера.
//     Оборавши конкретного юзера в цьому select відтворити його пости рівні App
// Ієрархія
// App-UserSelectComponent
// App-Posts-Post

import './App.css';
import Cars from "./components/cars/Cars";
import PostForm from "./components/form/formForAddCar/PostForm";
import UserSelectComponent from "./components/form/formForUser/UserSelectComponent";
import PostsOfUser from "./components/postsOfUser/PostsOfUser";
import {getPostsOfUser} from "./API/userApi/getPostsOfUser";
import {useState} from "react";

function App() {

    let [posts, setPosts] = useState([]);

    const getUserID = (id) => {
        getPostsOfUser(id).then(value => setPosts([...value]));
    }

    return (
        <div className={'app'}>

            <h2>Add a car:</h2>
            <PostForm/>
            <h2>Lists of cars:</h2>
            <Cars/>
            <h2>Users:</h2>
            <UserSelectComponent getUserID={getUserID}/>
            <h2>Posts of user:</h2>
            <PostsOfUser posts={posts}/>

        </div>
    );
}

export default App;
