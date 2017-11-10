import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Photo from './../../main/components/Photo';

describe('Photo Tests', function() {
	let component;
	const renderedPhoto = function(igallery=[],ichildren={},  ihistory={}, ilocation={},
		  iparams={}, irouter={}, irouteParams={}, iroutes=[], istatistics=[], iall=[]) {

		const photoProps = {

			allcategories : iall,
			children: ichildren,
			gallerys:  igallery,
			history:  ihistory,
			location: ilocation,
			params: iparams,
			router: irouter,
			routeParams:irouteParams,
			routes: iroutes,
			statistics: istatistics
	  	};

	   component = TestUtils.renderIntoDocument(<Photo {...photoProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){
		let gallery = [{id:1, url:"https", upload:"https"}];
 		const menu = renderedPhoto(gallery);
		expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let children = 'bad parameter';
	  	let gallery = [{id:1, url:"https", upload:"https"}];

	  	const menu = renderedPhoto(gallery, children);

	  } catch(e) {

	  	paramError = e.message;

	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	});

	it('should have main gallery container and photo container', function(){

		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'gallery-caption-container').length).toBe(1);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'gallery-wrap').length).toBe(1);
	});


});