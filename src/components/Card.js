import React, { Component } from 'react';

import '../css/Card.css';

class CardApp extends Component{
	render(){
		const { imgs } = this.props;
		return (
			<div className="square-container">
				{ imgs.map((img,index) => (
					<a href=""><div alt="img" key={index} className="square bg" style={{backgroundImage: 'url(' +img+ ')'}}></div></a>
				))}
			</div>
		)
	}
};

export default CardApp;