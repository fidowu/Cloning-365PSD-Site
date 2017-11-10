import { combineReducers } from 'redux';

import gallery from './gallery';
import statistics from './statistics';
import allcategories from './allcategories';

const combinedReducers = combineReducers({ gallery, statistics, allcategories });

export default combinedReducers;

