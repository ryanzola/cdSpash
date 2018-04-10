import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.scss';

class App extends Component {
  render() {
    return(
      <div>
        <div className="view"></div>
        <div className="left">
          <span className="text">welcome</span>
          <span className="text">to</span>
        </div>
        <div className="right">
          <span className="cd">chartDoc</span>
        </div>
        <div className="shadow-div"></div>
        <div className="img-container">
          <div className="comp"></div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('react-container'));
