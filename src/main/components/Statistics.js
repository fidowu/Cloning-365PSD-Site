import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

//const StatBox = (props)  => {
class StatBox extends React.Component {
	
	onStarClick(nextValue, prevValue, name, i) {

        this.setState({rating: nextValue});

        this.props.set_rating(this.props.i, nextValue);
    } 

 render() {

	let str = this.props.label.charAt(0).toUpperCase() + this.props.label.slice(1)

	let starbanner = false;

	if (str == "Rating") { starbanner = true;}

	let hearts = false;
	if (str == "Favourites") {hearts = true;}
		
	return (

		<div className="label-result">
			<span className="label">
				{str}
			</span>

			<span className="result">
				{starbanner &&

  					<StarRatingComponent 
                    	name="rate1" 
                    	starCount={10}
                    	value={this.props.stats[this.props.label]}

                    	onStarClick={this.onStarClick.bind(this)}
                	/>

				}

				{!starbanner && !hearts && 

					this.props.stats[this.props.label]
				}

				{hearts &&

				        <div className="likes">{this.props.stats[this.props.label]}
				             <button onClick={this.props.increase_favourites.bind(null, this.props.i) }>
				                 <i className="fa fa-heart fa-lg" aria-hidden="true"></i></button>
				       </div>
				}
			</span>
		</div>

		)
	}
}


//can't test stateless functional components with jasmine/karma react always returns null:-()
//const Statistics = (props) => {
class Statistics extends React.Component {

 render() {

	const a = ["views", "downloads", "favourites", "rating"];
	return (

			<div className="statistics">

				{a.map((val,i) => <StatBox key={i} label={val} stats={this.props.stats}   {...this.props}/> )}
				
			</div>

		)
  }
}

Statistics.propTypes = {

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
		stats :React.PropTypes.object.isRequired
};


export default Statistics;