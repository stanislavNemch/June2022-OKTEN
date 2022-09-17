
let _url = 'https://api.spacexdata.com/v3/launches/';

const getMissions = () => {
    return fetch(_url)
        .then(value => value.json())
} // return promise

export {getMissions};