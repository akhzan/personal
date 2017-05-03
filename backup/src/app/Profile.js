import React, { Component } from 'react';

import '../css/Profile.css';

class Profile extends Component{
	render(){
		return (
			<div className="profile">
				<h1>Send me an email to:</h1>
				<a href="mailto:syafrizal.akhzan@gmail.com">syafrizal.akhzan@gmail.com</a>
			</div>
		)
	}
}

export default Profile;