import React, { Component } from 'react';

import '../css/Home.css';

class Home extends Component{
	render(){
		return (
			<div>
				<div className="con-home">
					<div className="ganjel"></div>
					<div alt="img" className="squareimg-home" style={{backgroundImage: 'url(http://placehold.it/800x800)'}}></div>
					<div alt="img" className="squareimg-home" style={{backgroundImage: 'url(http://placehold.it/800x800)'}}></div>
					<div alt="img" className="squareimg-home" style={{backgroundImage: 'url(http://placehold.it/800x800)'}}></div>
				</div>
				<div className="titleHome">
					<p className="p1">Web Developer, Photographer, Illustrator.</p>
					<p className="p2">Contact me for code, photograph, and art.</p>
				</div>
			</div>
		)
	}
}

export default Home;