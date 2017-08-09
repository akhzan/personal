import React, { Component } from 'react';
import Card from '../components/Card.js';

import '../css/Photography.css';
var data = require('../json/photography.json');

const images = ["https://farm5.staticflickr.com/4424/35654004323_6f37ec2770_n.jpg",
		"https://farm5.staticflickr.com/4408/36416292766_4bf6ec58a9_n.jpg",
		"https://farm5.staticflickr.com/4432/35654005673_60be067a4c_n.jpg",
		"https://farm5.staticflickr.com/4381/36462049185_0ff13d7ac1_n.jpg",
		"https://c1.staticflickr.com/4/3842/32787668403_9e68f6dc8b_b.jpg",
		"https://c1.staticflickr.com/3/2808/32787673243_2ffc8d176e_b.jpg",
		"https://c1.staticflickr.com/4/3672/32787680493_0e1bfae14f_b.jpg",
		"https://c1.staticflickr.com/4/3754/33444936192_2da388890b_b.jpg",
		"https://c1.staticflickr.com/4/3834/33444933142_b885319464_b.jpg",
		"https://c1.staticflickr.com/4/3767/32787674343_9ff06b7d6c_b.jpg",
		"https://c1.staticflickr.com/4/3852/32787671313_8fbb9c4fc7_b.jpg",
		"https://c1.staticflickr.com/8/7073/27758672841_371006a37f_b.jpg"
		];

class Photography extends Component{
	render(){
		return (
			<div>
				<Card imgs={ images }></Card>
			</div>
		)
	}
}

export default Photography;