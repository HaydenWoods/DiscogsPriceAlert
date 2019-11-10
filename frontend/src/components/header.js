import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Restrict from './restrict';

import './header.scss';

const navItems = [
	{
		title: "Test",
		link: "/"
	},
	{
		title: "Test2",
		link: "/"
	}
]

export default class Header extends Component {
  render() {
    return (
      <div id="header">
      	<Restrict fillHeight>
	      	<div id="navigation">
	      		{ navItems.map((item, i) => {
	      			return(
	      				<Link to={item.link} key={i}>
		      				<div className="nav-item">
		      					<h5>{item.title}</h5>
		      				</div>
	      				</Link>
	      			)
	      		})}
	      		
	      	</div>
	      </Restrict>
      </div>
    );
  }
}
