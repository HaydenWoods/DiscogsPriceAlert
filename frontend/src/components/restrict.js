import React, { Component } from 'react'

import './restrict.scss';

export default class Restrict extends Component {
  render() {
  	let classes = `${this.props.fillHeight ? "fillHeight" : ""}`

    return (
      <div className={`restrict ${classes}`}>
      	{this.props.children}
      </div>
    );
  }
}
