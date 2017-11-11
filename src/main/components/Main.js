import React from 'react';
import { Link } from 'react-router';
import NavMenu from './NavMenu';
import SubMenu from './SubMenu';

class Main extends React.Component {

	render(){

		const element = React.cloneElement(this.props.children, this.props,  this.props.params);

		return (


		<div className="container">

				<NavMenu  {...this.props} />
				<SubMenu />
 
		        {React.cloneElement(this.props.children, this.props,  this.props.params)}
		 </div>

			
			)
	}
}


Main.propTypes = {

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

export default Main;