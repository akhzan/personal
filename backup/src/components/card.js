import React, { Component } from 'react';

import '../css/Photography.css';

const imagesParam = ["/imgs/tes3-2.jpg",
		"http://placehold.it/800x800",
		"http://placehold.it/800x800",
		"http://placehold.it/800x800",
		"http://placehold.it/800x800"
		];

class CardApp extends Component{
	constructor(props){
		super(props);
		this.state = {
			images: imagesParam
		}
	}
	render(){
		const {images} = this.state;
		return (
			<div className="square-container">
				{ images.map((image,index) => (
					<div alt="img" key={ index } className="square bg" style={{backgroundImage: 'url(' +image+ ')'}}></div>
				))}
			</div>
		)
	}
};

export default CardApp;