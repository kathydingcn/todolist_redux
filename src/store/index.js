import {createStore,combineReducers} from 'redux';
import {todos,filters} from './reducers';
 
let reducer = combineReducers({todos, filters});

let store = createStore(reducer);



export default store;