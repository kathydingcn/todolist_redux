const ADD_ACTION = 'ADD';
const add = (num )=> {
    return {
        type: ADD_ACTION,
        num,
    }
}

export default add;