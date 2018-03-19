import React from 'react';

import {ADD_TODO} from '../action_types';
// action: add, del, status change
export default function(state=[], action){

    switch (action.type){
        case ADD_TODO:
        return [...state,{id:Date.now(),title:action.title,completed:false}]
        default:
        return state;
    }
}
    
