import React from 'react';

//Component for the filter bar on the home page.
//const Categories = (props) => {
class GalleryFilterOptions extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            catValue : localStorage.getItem("category-filer")
        }
    }

    componentDidMount(){

        if (localStorage.getItem("category-filter")) {
           this.props.filter_category(localStorage.getItem("category-filter"));
           this.category.value = localStorage.getItem("category-filter");
        }

        if (localStorage.getItem("rating-filter")) {
           this.props.filter_rating(localStorage.getItem("rating-filter"));
           this.rating.value = localStorage.getItem("rating-filter");
        }

        if (localStorage.getItem("favourite-filter")) {
           this.props.filter_favourites(localStorage.getItem("favourite-filter"));
           this.favourites.value = localStorage.getItem("favourite-filter");
        }
    }

    componentWillUpdate(nextProps, nextState){

        localStorage.setItem("category-filter", nextProps.filtercategory);
        localStorage.setItem("rating-filter", nextProps.filterrating);
        localStorage.setItem("favourite-filter", nextProps.filterfavourites);

    }


    changeCategory(event){

            this.props.filter_category(this.category.value);

    }

    changeRating(event) {


            this.props.filter_rating(this.rating.value);
    }

    changeFavourites(event) {

            this.props.filter_favourites(this.favourites.value);   
    }

	render(){

        let cat = this.props.gallery
            .map(function(val, i){
                return val.category;
            })
            .filter(function (el, i, arr) {
                return arr.indexOf(el) === i;
            })
            .map(function(val,i){
                return <option key={i} value={val}>{val}</option>
            });

        cat.unshift(<option key={"none"} defaultValue=""></option>);

		return (

		<div className="gallery-filter">
                
          <div className="category box"> <label>Category</label>
            <select ref={(input) => {this.category = input}} 
                 onChange={this.changeCategory.bind(this)} >
                 {cat}
            </select>         
          </div>

          <div className="rating box">< label>Rating</label>
             <input ref={(input) => {this.rating = input}} 
               type="number" min="0"  onBlur={this.changeRating.bind(this)}/></div>
          <div className="favourites box"> <label>Favourites</label>
            <input ref={(input) => {this.favourites = input}} type="number" min="0" 
               onBlur={this.changeFavourites.bind(this)}/></div>
    	
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


