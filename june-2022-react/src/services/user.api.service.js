let _url = 'https://jsonplaceholder.typicode.com/users';
let _urlPost = 'https://jsonplaceholder.typicode.com/posts/';

const getUsers = () => {
  return fetch(_url)
      .then(value => value.json())
} // return promise

const getUser = (id) => {
  return fetch(_url+ '/' + id)
      .then(value => value.json())
}

const getPost = (id) => {
  return fetch(_urlPost+ '/' + id)
      .then(value => value.json())
}

export {getUsers, getUser, getPost};