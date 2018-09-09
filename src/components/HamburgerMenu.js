import React, { Component } from 'react';
import '../styles/components/hamburgers.css';


class HamburgerMenu extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isActive: false,
			classes: "hamburger hamburger--elastic" };
		this.toggleActive = this.toggleActive.bind(this);
	}

	toggleActive() { 
		if (!this.state.isActive) {
			this.setState({ 
				isActive: true,
				classes: "hamburger hamburger--elastic is-active"
			});
		}
		else { 
			this.setState({ 
				isActive: false,
				classes: "hamburger hamburger--elastic"
			});	
		}
	}
	
	render () {
		return (
			<div>
		      <button id="hamburger" className={this.state.classes} type="button" onClick={this.toggleActive}>
		        <span className="hamburger-box">
		          <span className="hamburger-inner"></span>
		        </span>
		      </button>
		 	</div>
	 	)
 	}
}

export default HamburgerMenu;