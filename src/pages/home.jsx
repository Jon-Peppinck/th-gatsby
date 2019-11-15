import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

import Header from '../components/Home/Header/Header';

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Home | ${config.siteTitle}`} />
        <Header />
      </Layout>
    );
  }
}

export default HomePage;
