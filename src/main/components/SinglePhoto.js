import React from 'react';
import Photo from './Photo';
import Statistics from './statistics';
import StarRating from 'react-star-rating';

//Shows the single photo view

//can't test stateless functional components with jasmine/karma react always returns null:-()
//const SinglePhoto = (props) => {
class SinglePhoto extends React.Component{

  render() {

   		const { galleryid } = this.props.params;
      const { gallery , statistics} = this.props;

   		const i = gallery.findIndex((obj) => obj.id == galleryid);

      const required = gallery[i];
      const stat = statistics[i];
      const upload = true;

    return (

      <div className="single-photo">

        <Photo i={i} gallerys={required} {...this.props} upload={upload} />
        <Statistics  i={i} gallerys={required} stats={stat}  {...this.props} />

      </div>
    )
   }
}


SinglePhoto.propTypes = {

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


export default SinglePhoto;