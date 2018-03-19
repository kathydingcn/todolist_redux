import React from 'react';

 
// action: add, del, status change
export default function(state={count:3}, action){

    switch (action.type){
        case 'ADD':
        console.log('add action is triggered', state.count);
        return Object.assign({},state,{count:state.count + action.num})
        default:
        return state;
    }
}