export function set_rating(index, rating){
	return {

		type : "SET_RATING",
		index, rating	
	}
}

export function increase_favourites(index) {
console.log("increase", index);

	return {
		type : "INCREASE_FAVOURITES",
		index
	}
}

export function filter_category(category) {
	return {

		type :"FILTER_CATEGORY",
		category
	}
}

export function filter_rating(rating){

	return {

		type: "FILTER_RATING",
		rating
	}
}

export function filter_favourites(favourites){

	return {
		type: "FILTER_FAVOURITES",
		favourites
	}
}