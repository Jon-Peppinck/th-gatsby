import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

import Header from '../components/Home/Header/Header';
import Search from '../components/Home/Search/Search';
import OurCommunity from '../components/Home/OurCommunity/OurCommunity';

import './home.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="full-screen-content">
          <Helmet title={`Home | ${config.siteTitle}`} />
          <Header />
          <div className="search-component">
            <Search />
          </div>
        </div>
        <OurCommunity />
      </div>
    );
  }
}

export default HomePage;
