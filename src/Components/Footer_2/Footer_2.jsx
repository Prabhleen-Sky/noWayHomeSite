import React, { Component } from 'react';
import './Footer_2.css';

class Footer_2 extends Component {
  render() {
    return (
    <footer className="footer" id='footer-two'
		style={{
			bottom: `${ this.props.isFooterOpen ? "8.6%" : "-200%"}`
		}}
	>
		<div className="footer-container">
			<div className="row">
				<div className="footer-col">
					<h4>Support</h4>
					<ul>
						<li><a href="#head">Head centre</a></li>
						<li><a href="#air">Air cover</a></li>
						<li><a href="#safety">Safety information </a></li>
						<li><a href="#cancellation">Cancellation Option</a></li>
						<li><a href="#response">Covid-19 Response</a></li>
						<li><a href="#report">Report a Neighbourhood Concern</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Community</h4>
					<ul>
						<li><a href="#airB">AirBnb.org : Disaster Relief Housing</a></li>
						<li><a href="#support">Support Afgan Refugees</a></li>
						<li><a href="#combating">Combating Discrimination</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Hosting</h4>
					<ul>
						<li><a href="#try">Try Hosting</a></li>
						<li><a href="#airC">Air covers for Host</a></li>
						<li><a href="#exp">Explore Hosting Resources</a></li>
						<li><a href="#visit">Visit a Community Forum</a></li>
						<li><a href="#host">How to host responsibly</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>AIR BnB</h4>
					<ul>
						<li><a href="#news">News room</a></li>
						<li><a href="#learn">Learn about new feature</a></li>
						<li><a href="#learnAb">Learn about our founders</a></li>
						<li><a href="#carr">Carriers</a></li>
						<li><a href="#inves">Investors</a></li>
					</ul>
				</div>
			</div>
		</div>

	 </footer>
  )
  }
}

export default Footer_2;