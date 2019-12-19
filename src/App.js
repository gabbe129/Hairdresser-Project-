import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

import './App.css';
import BookingTreatment from './BookingTreatment';

class App extends Component {
  render() {
    return (
      <Router basename="/hiardresser-frontend/">
        <div className="App">
          
          <div className="App__Form">
            

              <div className="FormTitle">
                  <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Home</NavLink>
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                   or 
                  <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              <Route exact path="/" component={BookingTreatment}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;