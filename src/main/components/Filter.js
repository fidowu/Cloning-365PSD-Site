import React from 'react';
import Photo from './Photo';

//Filter component - used when selection's made from the navigation bar.

//const Filter = (props) => {
class Filter extends React.Component{

  render(){
	const {gallery, params } = this.props;
	const filter = gallery.filter((val,i) => val.category == params.category);

	return (
			<div className="photo-gallery">
        				{filter.map((gallery, i) => 
        					<Photo {...this.props} key={i} i={i} gallerys={gallery} />)}
			</div>		)
    }
}

Filter.propTypes = {

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
    stats :React.PropTypes.object
};


export default Filter;


