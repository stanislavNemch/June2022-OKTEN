// import {users} from "./Data";
import User from "./User";
import {useState} from "react";


export default function Users() {
    let [users, setUsers] = useState([]);// [get,set()]

    fetch('https://jsonplaceholder.typicode.com/users')
          .then(value => value.json())
          .then(value => { setUsers(value) } );

    return (
      <div>
          <h2>app component header</h2>
          {  //Обычный перебор массива через map JavaScript!!
              users.map((user, index) => (<User item={user} key={index}/>)).splice(0,6)
          }

      </div>
    );
}
// splice(0,6) обрезка вывода массива, выводятся элементы массива от 0 до 6
//Созданно для вывода структуры данных, функционал обработки данных, рендеринг асинхронных данных