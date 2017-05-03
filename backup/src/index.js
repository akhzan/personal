import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './app/App';
import Home from './app/Home';
import About from './app/About';
import Profile from './app/Profile';
import Photography from './app/Photography';
import Drawing from './app/Drawing';
import Blog from './app/Blog';
import Contact from './app/Contact';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='home' component={Home}/>
			<Route path='about' component={About}/>
			<Route path='profile' component={Profile}/>
			<Route path='photography' component={Photography}/>
			<Route path='drawing' component={Drawing}/>
			<Route path='blog' component={Blog}/>
			<Route path='contact' component={Contact}/>
		</Route>
	</Router>,
	document.getElementById('root')
);
