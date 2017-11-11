import { combineReducers } from 'redux';

import gallery from './gallery';
import statistics from './statistics';
import allcategories from './allcategories';
import filtercategory from './filtercategory';
import filterrating from './filterrating';
import filterfavourites from './filterfavourites';

const combinedReducers = combineReducers({ gallery, statistics, allcategories, 
	  filtercategory, filterrating, filterfavourites });

export default combinedReducers;

