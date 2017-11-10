
import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import NavMenu from './../../main/components/NavMenu';

describe('NavMenu Tests', function() {

	const renderedNavMenu = function(ichildren={}, igallery=[], ihistory={}, ilocation={},
		  iparams={}, irouter={}, irouteParams={}, iroutes=[], istatistics=[], iall=[]) {

		const navMenuProps = {

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

	   const component = TestUtils.renderIntoDocument(<NavMenu {...navMenuProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){

 		const menu = renderedNavMenu();
		expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let children = 'bad parameter';
	  	const menu = renderedNavMenu(children);

	  } catch(e) {

	  	paramError = e.message;

	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	});


	it('sets mega menu items for free and premium menus', function(){

			const menu = renderedNavMenu({}, [{"id": 1, "type":"free", category:"Architecture"}, 
											  {"id": 2, "type":"premium", category:"Christmas"}]);

			expect(menu.childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML).toEqual("HOMEPAGE");
			expect(menu.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent).toEqual("FREE VECTOR");
			expect(menu.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0]
				.childNodes[0].childNodes[0].innerHTML).toEqual("Architecture");
			expect(menu.childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].textContent).toEqual("PREMIUM GRAPHICS");
			expect(menu.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0].childNodes[0]
				.childNodes[0].childNodes[0].innerHTML).toEqual("Christmas");
			expect(menu.childNodes[0].childNodes[0].childNodes[3].childNodes[0].innerHTML).toEqual("TAGS");

	})

});