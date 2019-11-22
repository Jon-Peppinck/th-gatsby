import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

export default class BlogPost extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    );
  }
}
