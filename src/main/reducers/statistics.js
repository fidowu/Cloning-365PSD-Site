function statistics(state=[], action){

	let index, arr;

	switch(action.type){

		case "SET_RATING" :
			index = action.index;
			arr = state.slice();
			arr[index].rating = action.rating;
			
			return arr;

			break;

		case "INCREASE_FAVOURITES" :
		
			index = action.index;
			arr = state.slice();
			arr[index].favourites += 1;

			return arr;

		default : 

			return state;

	}

}

export default statistics;