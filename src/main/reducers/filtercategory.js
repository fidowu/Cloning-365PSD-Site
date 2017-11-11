function filtercategory(state="", action){

	switch (action.type){

		case "FILTER_CATEGORY" :
			
			return action.category;
			break;

		default :
		  return state;
	}
}

export default filtercategory;