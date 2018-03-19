import React from 'react';

import {CHANGE_FILTER} from '../action_types';

export default function(state='all',action={}){

    switch(action.type){
        case CHANGE_FILTER:
        return action.filter;
        default:
        return state;
    }
}