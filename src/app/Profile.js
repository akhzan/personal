import React, { Component } from 'react';

import '../css/Profile.css';

class Profile extends Component{
	render(){
		return (
			<div className="profile">
				<p className="p1-profile">SYAFRIZAL AKHZAN</p>
				<p className="p2-profile">A 25 years old web (full stack) developer currently working at Jakarta, Indonesia. Sometimes photographing, illustrating things and people.</p>
				<p><span>Codes</span>Fluent in HTML5, CSS3, ASP.NET, C#, C, SQL, React, Angular, Angular 2, Polymer, Node JS, and REST API.</p>
				<p><span>Design</span>Fluent in CorelDraw, and recently started learning Adobe Photoshop and Illustrator.</p>
				<p><span>Currently working on</span>Astra Graphia Information Technology<br/>as Web Developer<br/>Astra International Project<br/>Desember 2014 - Present</p>
				<p><span>Education</span>Universitas Gadjah Mada<br/>Electronics and Instrumentation<br/>Paper: PID Control System for Flight Transition Mode of Tiltrotor<br/>2010 - 2014</p>
			</div>
		)
	}
}

export default Profile;