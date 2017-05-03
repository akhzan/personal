import React, { Component } from 'react';
import Card from '../components/Card.js';

const images = ["https://c1.staticflickr.com/3/2926/32787146073_de46d0f29c_b.jpg",
		"https://c1.staticflickr.com/4/3939/32756769914_491614c75d_b.jpg",
		"https://c1.staticflickr.com/3/2916/32785422013_c239701957_b.jpg",
		"https://c1.staticflickr.com/4/3944/32785423473_2f24704ef8_b.jpg",
		"https://c1.staticflickr.com/3/2833/33599227545_1a57fc2e39_b.jpg",
		"https://c1.staticflickr.com/3/2941/32785425693_4c0dc5c037_b.jpg"
		];

class Drawing extends Component{
	render(){
		return (
			<div>
				<Card imgs={ images }></Card>
			</div>
		)
	}
}

export default Drawing;