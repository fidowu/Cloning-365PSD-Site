import React from 'react';
import Photo from './Photo';

//Gallery of photo data in psd.data file

//can't test stateless functional components with jasmine/karma react always returns null:-()
//const PhotoGallery = (props) => {
class PhotoGallery extends React.Component{
	render(){

		return (

				<div className="photo-gallery">
        				{this.props.gallery.map((gallery, i) => 
        					<Photo {...this.props} key={i} i={i} gallerys={gallery} />)}
				</div>

			)
     }
}

PhotoGallery.propTypes = {

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

export default PhotoGallery;