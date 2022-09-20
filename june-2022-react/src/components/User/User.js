export default function User(props) {
    let {user, botUser, postUser} = props; //Передача функций

    return (
        <div>
            <h2>{user.id} -- {user.name} </h2>
            <p>{user.address.city} <br/> {user.email}</p>

            <button onClick = {() => {
                botUser(user);
            }}>datailis</button>

            <button onClick = {() => {
                postUser(user.id);
            }}>Post User</button>
        </div>
    );
}

//Созданно для вывода структуры данных, шаблон