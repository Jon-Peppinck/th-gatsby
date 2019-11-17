import React, { Component } from 'react';

import HomePage from '../areas/home/pages/home';

import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="layout-container">
        <HomePage />
      </div>
    );
  }
}
