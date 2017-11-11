function filterfavourites(state="", action){

	switch(action.type){

		case "FILTER_FAVOURITES":
			return action.favourites;
			break;
		default:
			return state;
	}

}


export default filterfavourites;