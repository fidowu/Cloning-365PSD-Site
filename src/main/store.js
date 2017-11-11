import { createStore } from 'redux';

import combinedReducers from './reducers/index.js';

import gallery from './data/psd.data';
import statistics from './data/statistics.data';
import allcategories from './data/allcategories.data';

const defaultState = {
	
 	gallery,
 	statistics,
 	allcategories,
 	filtercategory: "",
 	filterrating:"",
 	filterfavourites:""
}


const store = createStore( combinedReducers, defaultState );

export default store;