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