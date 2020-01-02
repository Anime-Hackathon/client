import React from 'react';

import {LoginReducer} from "../FirstReducer";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    login:LoginReducer
})

export default allReducers;