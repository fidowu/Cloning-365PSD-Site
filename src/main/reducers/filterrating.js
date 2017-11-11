function filterrating(state="",action){

	switch(action.type){
		case "FILTER_RATING" :

			return action.rating;
		default :
			return state;
	}
}

export default filterrating;

