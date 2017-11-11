import React from 'react';

//Component for the filter bar on the home page.
class GalleryFilterOptions extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            catValue : localStorage.getItem("category-filer")
        }
    }

 

    componentWillUpdate(nextProps, nextState){

        localStorage.setItem("category-filer", nextProps.filtercategory);
        localStorage.setItem("rating-filer", nextProps.filterrating);
        localStorage.setItem("favourite-filer", nextProps.filterfavourites);

    }


    changeCategory(event){

        if (event.keyCode == 13 || event.keyCode == 9){

            this.props.filter_category(this.category.value);
        }
    }

    changeRating(event) {

        if (event.keyCode == 13 || event.keyCode == 9){

            this.props.filter_rating(this.rating.value);
        }
    }

    changeFavourites(event) {

        if (event.keyCode == 13 || event.keyCode == 9){

            this.props.filter_favourites(this.favourites.value);
        }

    }

	render(){

		return (

		<div className="gallery-filter">
                
          <div className="category box"> <label>Category</label><input ref={(input) => {this.category = input}} 
             type="text"  onKeyDown={this.changeCategory.bind(this)}
             
             /></div>
          <div className="rating box">< label>Rating</label><input ref={(input) => {this.rating = input}} 
               type="number" min="0"  onKeyDown={this.changeRating.bind(this)}/></div>
          <div className="favourites box"> <label>Favourites</label>
            <input ref={(input) => {this.favourites = input}} type="number" min="0" 
               onKeyDown={this.changeFavourites.bind(this)}/></div>
    	
        </div>
    	)

    }
}


GalleryFilterOptions.propTypes = {

        allcategories : React.PropTypes.array,
        children: React.PropTypes.object,
        gallery: React.PropTypes.array,
        history: React.PropTypes.object,
        location: React.PropTypes.object,
        params: React.PropTypes.object,
        router: React.PropTypes.object,
        routerParams: React.PropTypes.object,
        routes: React.PropTypes.array,
        statistics: React.PropTypes.array,
        stats :React.PropTypes.object,
        filter_category: React.PropTypes.func,
        filter_rating: React.PropTypes.func,
        filter_favourites: React.PropTypes.func
};

export default GalleryFilterOptions;


