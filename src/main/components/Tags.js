import React from 'react';
import Link from 'react-router';

import {color, font} from './../data/tags';


class Tags extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			line : null,
			abc : null
		}

		this.handle = this.handle.bind(this)
	}
  

  	componentWillMount() {

		//Array(100).fill(undefined) or Array.from({ length: 100 })
		//https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-sizes
  		let abcChars =  [...Array(26)].map((x, i) => String.fromCharCode(65 + i));


		let abc = abcChars.map(function(charToAdd,i){
   			    return <button className={`btn btn${charToAdd}`} onClick={this.handle} key={i}>{charToAdd}</button>
		}, this);

		abc.unshift(<button className="btn btnAll" onClick={this.handle} key={"all"}>ALL</button>);
		this.setState({abc})
		//console.dir(abc)

  	}

  	handle(event){

  		
  		let p = this.props.allcategories
  		      .filter((val, i) => (val.slice(0,1) == event.target.innerHTML) || event.target.innerHTML == "ALL")
  		      .map((val,i) => {

  				const icolor = Math.floor(Math.random()*color.length);
  				const ifont = Math.floor(Math.random()*font.length);
  				const ncolor  = color[icolor];
  				const nfont = font[ifont];


  				return <li key={i}><a className={`${ncolor} f${nfont}`} href="#">{val}</a></li>

  		      })

		this.setState({line : p});
  	}

	render(){

		return(

			<div className="azNavigation">

				<div className="abc-buttons">
						{this.state.abc}
				</div>

				<div className="tags-cloud">
					{this.state.line}
				</div>
			</div>
		)
	}
}



Tags.propTypes = {

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
export default Tags;