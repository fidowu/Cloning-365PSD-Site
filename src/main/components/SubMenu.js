import React from 'react';
import DialogForm from './DialogForm';

//For now - function places subcribe on submenu 
//and has routines to allow interaction with jQuery dialog plugin
class SubMenu extends React.Component {
		constructor(props){
			super(props);

			this.state = {

				enabled : false
			}
		}
		
		openDialog(event){

				this.setState({enabled: true});
		}

		closeDialog(){
			
			this.setState({enabled: false});
		}

		render(){

			return (
				<div className="sub-menu">

					<div className="search"></div>
					<div  className="center"></div>
					<button onClick={this.openDialog.bind(this)}>Subcribe</button>
					<DialogForm enabled={this.state.enabled} closeDialog={this.closeDialog.bind(this)} openDialog={this.openDialog.bind(this)} />

				</div>
				)
		}
}

export default SubMenu;