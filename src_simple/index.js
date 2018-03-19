import React, {Component} from 'react';

import {createStore} from 'redux';
 
 
const counter = (state=0, action)=>{
    switch (action.type){
        case 'ADD':
        return state+action.num;
        case 'SUB':
        return state-action.num;
        default:
        return state;
    }
}

const store = createStore(counter);

console.log(store.getState());

store.dispatch({type:'ADD',num:6});
console.log(store.getState());
const render=()=>{
    document.getElementById('root').innerHTML = store.getState(); 
 }

store.subscribe(render);

render();




 