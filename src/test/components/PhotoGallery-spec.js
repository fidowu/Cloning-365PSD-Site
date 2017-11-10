import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PhotoGallery from './../../main/components/PhotoGallery';

describe('PhotoGallery Tests', function() {

	let component;
	const renderedPhotoGallery = function(igallery=[], ichildren={}, ihistory={}, ilocation={},
		  iparams={}, irouter={}, irouteParams={}, iroutes=[], istatistics=[], iall=[]) {

		const photoGalleryProps = {

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

	   component = TestUtils.renderIntoDocument(<PhotoGallery {...photoGalleryProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('xshould exist', function(){

 		const menu = renderedPhotoGallery();
		expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let gallery = 'bad parameter';
	  	const menu = renderedPhotoGallery(gallery);

	  } catch(e) {

	  	paramError = e.message;

	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	});

	it('has single photo class or components and no photo gallery when no data', function(){

		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'photo-gallery').length).toBe(1);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'gallery-caption-container').length).toBe(0);

	});

	it('has single photo class or components and photo gallery when there is data', function(){

		let gallery = [{id:1, url:"https", upload:"https"}];
	  	const menu = renderedPhotoGallery(gallery);

		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'photo-gallery').length).toBe(1);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'gallery-caption-container').length).toBe(1);
	})


});