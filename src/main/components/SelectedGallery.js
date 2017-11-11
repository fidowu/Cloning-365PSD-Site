import React from 'react';
import {connect} from 'react-redux';
import SelectedGallerySelector from './../selectors/selected_gallery';
import Photo from './Photo';

const SelectedGallery =(props) => {

	return  <div>
				<div className="photo-gallery">
        				{props.gallery.map((gallery, i) => 
        					<Photo {...props} key={i} i={i} gallerys={gallery} />)}
				</div>
            </div>
}

//wire up SelectedGallerySelector
const mapStateToProps = state => {
	return {

		gallery: SelectedGallerySelector(state)
	}
}

//sprinkle filtered data into functional component.
export default connect(mapStateToProps)(SelectedGallery)



