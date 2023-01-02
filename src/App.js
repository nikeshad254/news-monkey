import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

  c = 'john';

  render() {
    return (
      <div>
        <p>hello there: {this.c}</p>
      </div>
    )
  }
}

