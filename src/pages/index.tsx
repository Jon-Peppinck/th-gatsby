import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import HomePage from '../areas/home/pages/home';

import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

import '../../static/fonts/Nunito-Black.ttf';

import './index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  }
}));

export default class Home extends Component {
  render() {
    return (
      <div className="layout-container">
        <DeleteIcon />

        <Button variant="contained" color="primary">
          Click me!
        </Button>
        <HomePage />
      </div>
    );
  }
}
