import React, { Component } from 'react';

import '../css/Contact.css';

class Contact extends Component{
	render(){
		return (
			<div className="contact">
				<h1>Send me an email to:</h1>
				<a href="mailto:syafrizal.akhzan@gmail.com">syafrizal.akhzan@gmail.com</a>
			</div>
		)
	}
}

export default Contact;