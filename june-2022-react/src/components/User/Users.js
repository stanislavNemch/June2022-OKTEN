// import {users} from "./Data";
import User from "./User";
import {useEffect, useState} from "react";
//import {getUsers} from "../services/user.api.service";
import {getUsersAxios} from "../../services/user.api.axios.service";


export default function Users() {
    let [users, setUsers] = useState([]);// [get,set()]
    let [user,setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj)
    }

    // useEffect(() => {  //useEffect это хук выполняется один раз, чем отдельно fetch
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value)
    //         });
    // },[])

    useEffect(() => {  //useEffect это хук выполняется один раз, чем отдельно fetch
        // getUsers().then(value => setUsers(value));
        getUsersAxios().then(value => setUsers(value.data))
    },[])

    return (
      <div>

          <h2>app component header</h2>
          <hr/>
          {/*{user && <div>{JSON.stringify(user)}</div>}*/}
          <h3>{user?.phone} {user?.address.city}</h3>
          <hr/>
          {  //Обычный перебор массива через map JavaScript!!
              users.map((user, index) => (<User
                  item = {user}
                  key = {index}
                  lift = {lift}/>)).splice(0,6)
          }

      </div>
    );
}
// splice(0,6) обрезка вывода массива, выводятся элементы массива от 0 до 6
//Созданно для вывода структуры данных, функционал обработки данных, рендеринг асинхронных данных