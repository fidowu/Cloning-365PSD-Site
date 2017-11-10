import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Filter from './../../main/components/Filter';

describe('Filter Tests', function() {

	let component;

	const renderedFilter = function(igallery=[], iparams={},ichildren={},  ihistory={}, ilocation={},
		  irouter={}, irouteParams={}, iroutes=[], istatistics=[], iall=[]) {

		const filterProps = {

			allcategories : iall,
			children: ichildren,
			gallery:  igallery,
			history:  ihistory,
			location: ilocation,
			params: iparams,
			router: irouter,
			routeParams:irouteParams,
			routes: iroutes,
			statistics: istatistics
	  	};

	   component = TestUtils.renderIntoDocument(<Filter {...filterProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){

		let gallery = [{"id":"1", "url":"https", "upload":"https", "category":"Christmas"}];
		let params = {"category" : "Christmas"};

 		const menu = renderedFilter(gallery, params);
		expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let children = 'bad parameter';
	  	let gallery = [{id:1, url:"https", upload:"https"}];

	  	const menu = renderedFilter(gallery, children);

	  } catch(e) {

	  	paramError = e.message;

	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	}); 



	it('has single photo class or components and photo gallery ', function(){

		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'photo-gallery').length).toBe(1);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'gallery-caption-container').length).toBe(1);
	})

});