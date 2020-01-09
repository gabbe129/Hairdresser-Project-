import React, { Component } from 'react';
import { HashRouter as Router, Route, BrowserRouter, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import BookingTreatment from './components/BookingTreatment';
import ChooseHairdresser from "./components/ChooseHairdresser";
import './App.css';
import ChooseTime from './components/ChooseTime';
import ConfirmBooking from './components/ConfirmBooking';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div className="App__Form">
            

              <div className="FormTitle">
                  <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Book time</NavLink>
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
              </div>

              <Route exact path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              <Route path="/hairdresser" component={ChooseHairdresser}>
              </Route>
              <Route path="/time" component={ChooseTime}>
              </Route>
              <Route path="/confirm" component={ConfirmBooking}>
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