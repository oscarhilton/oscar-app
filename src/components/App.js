import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { getPages, returnPages } from '../actions/pageActions';
import Homepage from './Homepage';
import AboutPage from './AboutPage';

class App extends Component {
  templates = {
    'sample-page': Homepage,
    'about': AboutPage
  }

  componentWillMount() {
    this.props.getPages();
    this.props.returnPages();
  }

  buildRoutes(){
      const { loading, data } = this.props.pages;
      switch (loading) {
        case null:
          return;
        case true:
          return;
        case false:
          return data.map((page) => {
              return(
                  <Route
                      key={page.id}
                      component={this.templates[page.slug]}
                      path={`/${page.slug}`}
                      exact
                  />
              )
          })
      }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={ Homepage } exact />
            {this.buildRoutes()}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ pages }) => {
  return { pages };
};

export default connect(mapStateToProps, { getPages, returnPages })(App);
