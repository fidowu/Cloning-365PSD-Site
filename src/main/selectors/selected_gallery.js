import {createSelector} from 'reselect';

//Reselect selector 
//Takes a list of gallery photos and photo filter options, category, rating and favourites
//and picks out the selected gallery photo(s)

//..get data from store that will be used to determine filter result set.
const gallerySelector = state => state.gallery;
const statisticsSelector = state => state.statistics;

const selectedCategory = state => state.filtercategory;
const selectedRating = state => state.filterrating;
const selectedFavourites = state => state.filterfavourites;


//function that does calculation 
const getGallery = (gallery, statistics, filtercategory, filterrating, filterfavourites) =>   {
	
	//get records that comply with all 3 filters
	const selectedGallery = gallery.filter((val,i) => {

		const israted = p =>  p.id == val.id;
		const rating = statistics.find(israted);

		let cat = true;
		if (filtercategory) {cat = val.category == filtercategory;} 

		let rat = true;
		if (filterrating) { rat = rating.rating == filterrating; }

		let fav = true;
		if (filterfavourites) { fav = rating.favourites == filterfavourites; }


		return cat && rat && fav
	})


	return selectedGallery;
};

export default createSelector(
	gallerySelector,
	statisticsSelector,
	selectedCategory,
    selectedRating,
    selectedFavourites,
	getGallery
)





