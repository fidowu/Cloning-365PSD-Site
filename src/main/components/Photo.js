import React from 'react';
import { Link } from 'react-router';

//Photo container with single photo and caption that on the main gallery

//can't test stateless functional components with jasmine/karma react always returns null:-()
//const Photo = (props) => {
class Photo extends React.Component {

  render() {
	const { gallerys, upload } = this.props;
	let display = gallerys.url;
	if (upload) { display = gallerys.upload}

	return (
		 	<div className="gallery-caption-container">

		 		<div className="gallery-wrap">
		 			<Link to={`/view/${gallerys.id}`}>
		 				<img src={display} className="grid-photo" />
		 			</Link>

		 			<figcaption>
 						<h4>{gallerys.category}</h4>
 						<p>{gallerys.description}</p>
		 			</figcaption>
		 		</div>
		 	</div>
	)
  }
}

Photo.propTypes = {

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

export default Photo;