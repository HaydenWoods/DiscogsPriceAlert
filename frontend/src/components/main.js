import React, { Component } from 'react'
import axios from 'axios';

import Header from './header'
import Restrict from './restrict'

import { Card, Icon, Image } from 'semantic-ui-react'

import './main.scss';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			release: null,
		}
	}

	componentDidMount() {
		axios.get(`http://localhost:3001/api/release/13977232`)
	  .then(response => {
			this.setState({
				release: response.data.payload,
			});
		})
	  .catch(error => console.log(error));	
	}

  render() {
  	let release = this.state.release;

  	if (release) {
  		for (var i = 0; i < release.images.length; i++) {
  			console.log(release.images[i])
  		}
  	}

    return (
      <div id="main">
      	<Header/>
      	<Restrict>
      		{ release ?
      		<Card>
				   	<Image src={release.images[0].uri}/>
				    <Card.Content>
				      <Card.Header>{release.artists[0].name} - {release.title}</Card.Header>
				      <Card.Meta>
				        <span className='date'>{release.year}</span>
				      </Card.Meta>
				    </Card.Content>
				  </Card>
				 	: 
				 	null
					}
      	</Restrict>
      </div>
    );
  }
}
