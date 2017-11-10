import allcategories from './../../main/reducers/allcategories';

describe('Reducer allcategories', function(){

	it('returns the given state', function(){

		let newstate = allcategories([],"");

		expect(newstate).toEqual([]);
	});

})
