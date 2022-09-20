// import {users} from "./Data";
import User from "./User";
import {useEffect, useState} from "react";
// import {getUsers, getPost} from "../../services/user.api.service";
import {getUsersAxios, getPostAxios} from "../../services/user.api.axios.service";


export default function Users() {
    let [users, setUsers] = useState([]);// [get,set()]
    let [user,setUser] = useState(null);
    let [posts, setPosts] = useState([]);
    let [postId, setPostId] = useState([]);

    const botUser = (obj) => {
        setUser(obj)
    }

    const postUser = (postId) => {
        setPostId(postId)
    }

    useEffect(() => {  //useEffect это хук выполняется один раз, чем отдельно fetch
        // getUsers().then(value => setUsers(value));
        getUsersAxios().then(value => setUsers(value.data))
    },[])

    useEffect(() => {  //useEffect это хук выполняется один раз, чем отдельно fetch
        // getPost(postId).then(value => setPosts(value));
        getPostAxios().then(value => setPosts(value.data))
    },[])

    return (
      <div>

          <h2>User and Post component header</h2>

          <hr/>
          <h3>{user?.phone} {user?.address.city}</h3>
          <hr/>
          <br/>
          <hr/>
          {posts?.filter(value => value.userId === postId).map(({ id, title, body}) => <div><h3>PostId: {id}.<br/>
              Title Post: {title}.</h3><p>{body}</p></div>)}
          <hr/>
          {  //Обычный перебор массива через map JavaScript!!
              users.map((user, index) => (<User
                  user = {user}
                  key = {index}
                  botUser = {botUser}
                  postUser = {postUser}
              />)).splice(0,6)
          }
      </div>
    );
}
// splice(0,6) обрезка вывода массива, выводятся элементы массива от 0 до 6
//Созданно для вывода структуры данных, функционал обработки данных, рендеринг асинхронных данных