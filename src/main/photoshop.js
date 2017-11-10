import React from 'react';
import { render } from 'react-dom';

import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import css from './css/style.css';
import $ from 'jquery';

import store from './store';

import App from './components/App';
import Main from './components/Main';


import PhotoGallery from './components/PhotoGallery';
import SinglePhoto from './components/SinglePhoto';
import Tags from './components/Tags';
import Filter from './components/Filter';



const router = (
	<Provider store={store} >
		<Router history={hashHistory} >
			<Route path="/" component={App} >
				<IndexRoute component={PhotoGallery}> </IndexRoute>

				<Route path="view/:galleryid" component={SinglePhoto}></Route>
				<Route path="/tags" component={Tags}></Route>
				<Route path="/free/:category" component={Filter}></Route>
				<Route path="/premium/:category" component={Filter}></Route>

			</Route>

		</Router>
	</Provider>
)


render(

  router, document.getElementById('root')
)


