import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from '../Details/Details'
import MovieList from '../MovieList/MovieList'
import { Button } from '@material-ui/core';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MovieList}/>
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
