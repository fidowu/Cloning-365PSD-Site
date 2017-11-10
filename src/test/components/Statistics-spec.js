
import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Statistics from './../../main/components/Statistics';

describe('Statistics Tests', function() {


const renderedStats = function(istatistics=[], istats={}, ichildren={}, igallery=[], ihistory={}, ilocation={},
		  iparams={}, irouter={}, irouteParams={}, iroutes=[], iall=[]) {

		const fFunc = function() {
		
		}
		const statsProps = {

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

	   const component = TestUtils.renderIntoDocument(<Statistics {...statsProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){
 		const menu = renderedStats();
		expect(menu).toBeTruthy();
	});


	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let stats='bad parameter';
	  	const menu = renderedStats(stats);

	  } catch(e) {

	  	paramError = e.message;
	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^stats is not defined/);

	});



});