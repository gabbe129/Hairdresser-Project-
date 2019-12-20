import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import BookingTreatment from './components/BookingTreatment';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router basename="/hiardresser-frontend/">
        <div className="App">
          
          <div className="App__Form">
            

              <div className="FormTitle">
                  <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Home</NavLink>
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
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