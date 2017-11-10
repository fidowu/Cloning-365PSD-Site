
import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Tags from './../../main/components/Tags';

describe('Tag Tests', function() {
	let component;


	const renderedTags = function(iall=[], ichildren={}, igallery=[], ihistory={}, ilocation={},
		  iparams={}, irouter={}, irouteParams={}, iroutes=[], istatistics=[]) {

		const tagsProps = {
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

	   component = TestUtils.renderIntoDocument(<Tags {...tagsProps} />);
	   return ReactDOM.findDOMNode(component);

	}

	it('should exist', function(){

 		const menu = renderedTags();
		expect(menu).toBeTruthy();
	});

	it('warns when passed bad parameters', function(){

	  var paramError = '';

	  spyOn(console, 'error');

	  try{

	  	let children ='bad parameter';
	  	const menu = renderedTags(children);

	  } catch(e) {

	  	paramError = e.message;
	  }

	  expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Warning: Failed prop type: Invalid prop/));
	  //expect(paramError).toMatch(/^children is not defined/);

	});

	it('should have a-z button list plus all', function(){
 		const menu = renderedTags();

		expect(component.state.abc.length).toEqual(27);
		expect(menu.querySelectorAll('button').length).toEqual(27);

	});

	it ('simulate click and show categories for all', function(){

		const allcategories = ["A Beautiful Background", "Christmas & New Year"];
		const menu = renderedTags(allcategories);

		const allbutton = menu.querySelectorAll("button")[0];
		expect(allbutton.textContent).toEqual('ALL');
		TestUtils.Simulate.click(allbutton);

		const tagsCloud = menu.querySelectorAll("li");
		expect(tagsCloud.length).toEqual(2);

		expect(menu.querySelectorAll("li a")[0].innerHTML).toEqual("A Beautiful Background");
		expect(menu.querySelectorAll("li a")[1].innerHTML).toEqual("Christmas &amp; New Year");

	})


	it ('simulate click and on category with no data', function(){

		const allcategories = ["A Beautiful Background", "Christmas & New Year"];
		const menu = renderedTags(allcategories);

		const Bbutton = menu.querySelectorAll("button")[2]; 
		expect(Bbutton.textContent).toEqual("B");

		TestUtils.Simulate.click(Bbutton);

		const tagsCloud = menu.querySelectorAll("li");
		expect(tagsCloud.length).toEqual(0);

	});


	it ('simulate click and on category with specific data', function(){

		const allcategories = ["A Beautiful Background", "Christmas & New Year"];
		const menu = renderedTags(allcategories);

		const Abutton = menu.querySelectorAll("button")[1]; 
		expect(Abutton.textContent).toEqual("A");

		TestUtils.Simulate.click(Abutton);

		const tagsCloud = menu.querySelectorAll("li");
		expect(tagsCloud.length).toEqual(1);

	});

});