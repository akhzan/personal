import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import { Link } from 'react-router';

import logo from '../logo.svg';
import menu from '../icon/Menu.svg';
import close from '../icon/Close.svg';
import '../css/App.css';
import '../css/react-drawer.css';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      count: 5,
      open: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  toggleDrawer(e){
    this.setState({open: !this.state.open});
  }

  onDrawerClose(e){
    this.setState({open: false});
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="box-left">
            <div className="item bt-menu">
              <button className="button-std" onClick={this.toggleDrawer}>
                <img src={this.state.open ? close : menu} className="ico" alt="menu" />
                {this.state.open ? <span>CLOSE</span> : <span>MENU</span>}
              </button>
            </div>
          </div>
          <div className="box-right">
            <div className="item-right">
              <div className="button-default"><Link to="/contact">CONTACT ME !</Link></div>
            </div>
          </div>
          <div className="logo-header">
            <Link to="/home">
              <img src={logo} className="App-logo" alt="logo" />
              <span>LOGO</span>
            </Link>
          </div>
        </div>
        <p className="App-intro">To get started {this.props.name}, edit <code>src/App.js</code> and save to reload.</p>
        <p>Nih coba count ya..{this.state.count}..</p>
        <button type="button" onClick={this.incrementCount.bind(this)}>Increment</button>
        <ReactDrawer
          open={this.state.open}
          position="left"
          onClose={this.onDrawerClose}>
          <div className="drawer-content">
          	<ul>
	         	<li><Link to="/home" onClick={this.onDrawerClose} activeClassName="active">Home</Link></li>
	         	<li><Link to="/profile" onClick={this.onDrawerClose} activeClassName="active">Profile</Link></li>
	          	<li><Link to="/photography" onClick={this.onDrawerClose} activeClassName="active">Photography</Link></li>
	          	<li><Link to="/drawing" onClick={this.onDrawerClose} activeClassName="active">Illustration</Link></li>
	          	<li><Link to="/blog" onClick={this.onDrawerClose} activeClassName="active">Blog</Link></li>
	          	<li><Link to="/contact" onClick={this.onDrawerClose} activeClassName="active">Contact</Link></li>
	          	<li><Link to="/about" onClick={this.onDrawerClose} activeClassName="active">About</Link></li>
	        </ul>
          </div>
        </ReactDrawer>

        <div className="container">
        	{this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
