import React, {Component} from 'react';

import {createStore} from 'redux';
 
 
const counter = (state=0, action)=>{
    switch (action.type){
        case 'ADD':
        return state+1;
        case 'SUB':
        return state-1;
        default:
        return state;
    }
}

const store = createStore(counter);

console.log(store.getState());
