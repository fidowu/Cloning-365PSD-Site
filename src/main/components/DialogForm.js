import React from 'react';

//Interaction with jQuery - dialog opens when the button subscribe 
//is clicked

class DialogForm extends React.Component{

	constructor(props) {

		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event){

		event.preventDefault();

		this.props.openDialog(event);

	}

	componentDidMount() {

		let thisjsx = this;
		let allFields = $( [] ).add( name ).add( email );
		
		$('#dialog-form').dialog({

			autoOpen: false,
			resizable: false,
			modal: true,
			width: '605',
			position: { my: "center", at: "top" },
 			buttons: {},
      		close: function() {

      			thisjsx.props.closeDialog();
        		thisjsx.formFields.reset();
        		allFields.removeClass( "ui-state-error" );

     		 }
		});

		//no title bar but still close
		$(".ui-dialog-titlebar").removeClass('ui-widget-header');
	}

	componentWillReceiveProps(nextProps) {
		
		if(nextProps.enabled) {

			$('#dialog-form').dialog("open");

		} else {

			$('#dialog-form').dialog("close");
		}
	}

	render(){

		return(

			<div id="dialog-form" title="">

				<h1 className="pa10 pt15 italic text-color">Like what you see on 365PSD ?</h1>
				<h2 className="px20 pb15 text-muted">Join our email newsletter to receive a free PSD every day for the rest of your life!</h2>
 
  				<form  ref={(input) => {this.formFields = input}}>

    			 <fieldset>

      				<input ref={(input) => {this.name = input}} type="text" name="name" id="name"  placeholder="full name" required/>
      				<input ref={(input) => {this.email = input}} type="text" name="email" id="email"  placeholder="email" required />
 
     			 	<button className="onsubmit" onClick={this.onSubmit}>
						<i className="fa fa-arrow-circle-right fa-lg" aria-hidden="true"></i>	
     			 	</button>
    		 	 </fieldset>
  				</form>
  				<p className="h5 italic text-muted py15">We promise never to spam you or give your email address to a third-part.
				Feed newsletter services provided by Google FeedBurner.</p>
			</div>

			)
	}
}

export default DialogForm;