import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Main from './../../main/components/Main';

describe('Main Tests', function() {
	let component;

	const renderedMain = function(igallery=[], ichildren={}, ihistory={}, ilocation={},
		  iparams={}, irouter={}, irouteParams={}, iroutes=[], istatistics=[], iall=[]) {

		const Connect = () => {};
		const mainProps = {

			allcategories : ["xxx"],
			children: {ref:null, props:{}},
			gallery:  igallery,
			history:  ihistory,
			location: ilocation,
			params: iparams,
			route: irouter,
			routeParams:irouteParams,
			routes: irouter,
			statistics: istatistics
	  	};


	   component = TestUtils.renderIntoDocument(<Main {...mainProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){

 		//const menu = renderedMain();
		//expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let gallery = 'bad parameter';
	  	const menu = renderedMain(gallery);

	  } catch(e) {


	  	paramError = e.message;

	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	});

	it('', function(){

		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'container').length).toBe(0);
		expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'menu-wrapper').length).toBe(0);
	})

})

