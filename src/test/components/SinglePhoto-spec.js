import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SinglePhoto from './../../main/components/SinglePhoto';

describe('SinglePhoto Tests', function() {

	let component;
	const renderedSinglePhoto = function(igallery=[], istatistics=[], iparams={}, istats={}, ichildren={}, ihistory={}, ilocation={},
		   irouter={}, irouteParams={}, iroutes=[], iall=[]) {

		const fFunc = function() {
		
		}
		const singlephotoProps = {

			allcategories : iall,
			children: ichildren,
			gallery:  igallery,
			history:  ihistory,
			location: ilocation,
			params: iparams,
			router: irouter,
			routeParams:irouteParams,
			routes: iroutes,
			statistics: istatistics,
			stats : istats,
			increase_favourites :fFunc


	  	};

	   component = TestUtils.renderIntoDocument(<SinglePhoto {...singlephotoProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){
		let gal = [{"id" :1, "url": "https:"}];
		let stats= [{"id": "1","views": 49093,"downloads": 11601,"favourites": 32,"rating": 3}];
		let params = {galleryid: 1};

 		const menu = renderedSinglePhoto(gal,stats, params);
		expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	   spyOn(console, 'error');

	  try{

	  	let gallery = 'bad parameter';
	  	const menu = renderedSinglePhoto(gallery);

	  } catch(e) {

	  	paramError = e.message;

	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	});


	it('has single photo and statistics class or components', function(){

		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'single-photo').length).toBe(1);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'gallery-caption-container').length).toBe(1);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'statistics').length).toBe(1);

	})

});