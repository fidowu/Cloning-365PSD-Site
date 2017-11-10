import React from 'react';
import { Link } from 'react-router';

//Navigation Menu

const SingleMenu = (props) => {

	const { path, title } = props;
	return <li><Link to={path}>{title}</Link></li>
}

const SubMenu = (props) => {

		const { path, title, total, submenu } = props;

		return <li className="submenu">
           		 <Link to={path}>{title}&nbsp;<span className="badge">{total}</span></Link>
           		 <ul className="megamenu">
                		<ul>
              				{submenu}
                		</ul>
            		</ul>
        		</li>
}

const MegaMenu = (props) => {
	const countedCategories = props.gallery
			.filter((val,i) => val.category != ""  && val.type== props.type)
			.reduce((allcategories, category) => {
				const cat = category.category;
				if (cat in allcategories){
					allcategories[cat]++;
				} else {
					allcategories[cat] = 1;
				}

				return allcategories;
				}, {});



	const total = Object.keys(countedCategories) 
			.reduce(function(sum, val) {
				
				return sum + countedCategories[val]

			}, 0);


	let p = Object.keys(countedCategories)
		    .map((val,i) =>  {

      			return <li className="lineClass" key={i}><Link to={`/${props.type}/${val}`}>
      			         <span className="labelMenu">{val}</span> 
      			         <span className="badge">{countedCategories[val]}</span>
      			        </Link></li>

				});


	return <SubMenu path= {`/${props.type}`} title={props.title} total={total} submenu={p} />


}


//can't test stateless functional components with jasmine/karma react always returns null:-()
class NavMenu extends React.Component{
//const NavMenu = (props) => {

	render() {

	return <div className="menu-wrapper">

		<nav>
    		 <ul>	
        		<SingleMenu path="/" title={"HOMEPAGE"} />
                <MegaMenu {...this.props} type="free"  title="FREE VECTOR"/>
                <MegaMenu {...this.props} type="premium"  title="PREMIUM GRAPHICS" />
        		<SingleMenu path="/tags" title="TAGS" />
    		</ul>
 		</nav>
	</div>
  }
}

NavMenu.propTypes = {

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

export default NavMenu;
